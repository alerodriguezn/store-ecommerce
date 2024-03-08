import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";


export const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? " ",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? " ",
      allowDangerousEmailAccountLinking: true
    }),

  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }

      return token;

    },
    session({ session, token, user }) {
      session.user = token.data as any;
      return session;
    },
    


  },
} satisfies NextAuthConfig;

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
