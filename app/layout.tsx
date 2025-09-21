import type { Metadata } from "next";
import { montserrat, oswald } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
