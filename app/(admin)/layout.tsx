import type { Metadata } from "next";

import "../globals.css";




export const metadata: Metadata = {
  title: "schizo sanity admin panel",
  description: "to control those degenerates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
    // </ClerkProvider>
  );
}
