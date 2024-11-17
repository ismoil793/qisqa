import prisma from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/utils/auth/nextAuthOptions';

export async function GET(req: NextRequest) {
  // @ts-ignore
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session) {
    // @ts-ignore
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // const url = new URL(req.url);
    // const searchParams = url.searchParams;
    // const email = searchParams.get('email');

    let userInfo = await prisma.user.findFirst({
      where: {
        email: session.user.email
      },
      include: {
        page: true
      }
    });

    if (!userInfo && session.user) {
      userInfo = await prisma.user.create({
        data: {
          name: session.user.name,
          email: session.user.email
        }
      });
    }

    if (!userInfo) {
      // @ts-ignore
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ data: userInfo });
  } catch (error) {
    // @ts-ignore
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}
