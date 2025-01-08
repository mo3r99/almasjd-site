import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [AzureADProvider],
  callbacks: {
    authorized: async ({ auth }) => {
      if (!req.auth && req.nextUrl.pathname == "/dashboard") {
        const newUrl = new URL("/auth", req.nextUrl.origin);
        return Response.redirect(newUrl);
      }
    },
  },
});
