import prisma from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/utils/auth/nextAuthOptions';
import { validateRequest } from './validateRequest';
import { optimizeBase64Image } from '@/app/api/profile/imageOptimizer';

export async function GET(req: NextRequest) {
  // @ts-ignore
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session) {
    // @ts-ignore
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    let pageInfo = await prisma.user.findFirst({
      where: {
        email: session.user.email
      },
      include: {
        page: {
          include: {
            links: true
          }
        }
      }
    });

    if (!pageInfo) {
      // @ts-ignore
      return NextResponse.json({ message: 'Page not found' }, { status: 404 });
    }

    return NextResponse.json({ data: pageInfo });
  } catch (error) {
    // @ts-ignore
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  // @ts-ignore
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session) {
    // @ts-ignore
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { path, title, image, bgImageName, links } = (await req.json()) || {};

    const validateError = validateRequest({ path, links });

    if (validateError) {
      // @ts-ignore
      return NextResponse.json({ error: validateError }, { status: 400 });
    }

    const userEmail = session.user.email;
    const user = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!user) {
      // @ts-ignore
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const qisqaPath = await prisma.page.findFirst({
      where: { path }
    });

    const existingPage = await prisma.page.findFirst({
      where: { userId: user.id }
    });

    if (qisqaPath && existingPage?.path !== path) {
      // @ts-ignore
      return NextResponse.json({ error: `Path ${path} already exists` }, { status: 400 });
    }

    let optimizedImage = undefined;
    if (image) {
      optimizedImage = await optimizeBase64Image(image);
    }

    const pageData = {
      path,
      title,
      image: optimizedImage,
      bgImageName
    };

    const linksData = links?.map((link: { title: string; url: string }) => ({
      title: link.title,
      url: link.url
    }));

    let page;
    if (existingPage) {
      page = await prisma.page.update({
        where: { id: existingPage.id },
        data: {
          ...pageData,
          links: {
            deleteMany: {},
            create: linksData
          }
        }
      });
    } else {
      page = await prisma.page.create({
        data: {
          ...pageData,
          userId: user.id,
          links: {
            create: linksData
          }
        }
      });
    }

    // @ts-ignore
    return NextResponse.json({ page }, { status: 201 });
  } catch (error) {
    // @ts-ignore
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}
