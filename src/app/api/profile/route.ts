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
