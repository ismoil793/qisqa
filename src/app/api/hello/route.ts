import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// hello route
export async function GET(req: NextRequest) {
  try {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
      // @ts-ignore
      return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
    }

    // Verify JWT with secret key
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
    // @ts-ignore
    req.user = decoded;
    return NextResponse.json({});
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
  }
}
