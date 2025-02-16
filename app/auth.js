import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

const allowedUsers = [
  'm.rauf@almasjid.co.uk',
  'hamza.malik@almasjid.co.uk',
  'ibrahim.rauf@almasjid.co.uk',
  'hamza.rauf@almasjid.co.uk'
]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
    }),
  ],
  pages: {
    error: "/error",
  },
  callbacks: {
    signIn({ profile }) {
      return allowedUsers.includes(profile.unique_name);
    }
  }
});

export const authConfig = {
  secret: process.env.AUTH_SECRET,
} 
