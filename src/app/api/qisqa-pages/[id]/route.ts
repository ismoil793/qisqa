import prisma from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }) => {
  const awaitedParams = await params;
  const { id } = awaitedParams || {};

  try {
    if (!id) {
      // @ts-ignore
      return NextResponse.json({ error: 'Path id is required' }, { status: 400 });
    }

    let pageInfo = await prisma.page.findFirst({
      where: { path: id },
      select: {
        id: true,
        path: true,
        title: true,
        bgImageName: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
        image: true,
        links: true
      }
    });

    if (!pageInfo) {
      // @ts-ignore
      return NextResponse.json({ error: 'Page not found' }, { status: 404, path: id });
    }

    return NextResponse.json({ data: pageInfo });
  } catch (error) {
    // @ts-ignore
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
};
