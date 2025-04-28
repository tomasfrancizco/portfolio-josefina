import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josefina Freire Knight",
  description: "Josefina Freire Knight -Graphic Designer from Barcelona",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
