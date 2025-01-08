import { SessionProvider } from "next-auth/react";
import "./auth.css";

export default function AuthLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>{children}</main>
        </body>
      </html>
    </SessionProvider>
  );
}
