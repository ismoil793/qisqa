import { NextAuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import prisma from '@/utils/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const NEXT_AUTH_OPTIONS: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  // adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        // @ts-ignore
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.accessToken = token.accessToken; // Pass the access token to the session
      return session;
    },
    // async signIn({ user }) {
    //   const existingUser = await prisma.user.findUnique({
    //     where: { email: user.email }
    //   });
    //
    //   if (!existingUser) {
    //     await prisma.user.create({
    //       data: {
    //         email: user.email,
    //         name: user.name
    //         // username: user.email.split('@')[0],
    //       }
    //     });
    //   }
    //
    //   return true;
    // }
  }
};
