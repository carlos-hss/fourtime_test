import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

const public_sans = Public_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "On The Go",
  description: "Powered by carlos-hss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={public_sans.className}>{children}</body>
    </html>
  );
}
