import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [AzureADProvider],
  pages: {
    error: "/error",
  },
  callbacks: {
    signIn({ profile }) {
      return profile.email === 'm.rauf@almasjid.co.uk'
    }
  }
});
