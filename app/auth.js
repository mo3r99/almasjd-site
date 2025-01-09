import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

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
      console.log(profile)
      return profile.unique_name.includes('@almasjid.co.uk');
    }
  }
});

export const authConfig = {
  secret: process.env.AUTH_SECRET,
} 
