import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const allowedUsers = process.env.ALLOWED_USERS.split(' ');

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [GitHub],
  callbacks: {
    async signIn({ profile }) {
      return allowedUsers.includes(profile.email);
    },
  },
});

export const authConfig = {
  secret: process.env.AUTH_SECRET,
};
