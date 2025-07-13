import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

const allowedUsers = [
  "m.rauf@almasjid.co.uk",
  "hamza.malik@almasjid.co.uk",
  "ibrahim.rauf@almasjid.co.uk",
  "hamza.rauf@almasjid.co.uk",
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    MicrosoftEntraID
  ],
  pages: {
    error: "/error",
    signIn: "/auth",
  },
  callbacks: {
    signIn({ profile }) {
      console.log(profile);
      return allowedUsers.includes(profile.unique_name);
    },
  },
});

export const authConfig = {
  secret: process.env.AUTH_SECRET,
};
