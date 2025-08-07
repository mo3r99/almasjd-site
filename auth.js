import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const allowedUsers = [
  "m.rauf@almasjid.co.uk",
  "hamza.malik@almasjid.co.uk",
  "ibrahim.rauf@almasjid.co.uk",
  "hamza.rauf@almasjid.co.uk",
  "mo3r99@gmail.com"
];

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
