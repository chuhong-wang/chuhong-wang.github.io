import type { Metadata } from "next";
import { Elms_Sans, Inconsolata } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";

const elmsSans = Inconsolata({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chuhong Wang",
  description:
    "Research engineer building AI for materials discovery. PhD in Computational Materials Science from Johns Hopkins University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${elmsSans.variable} antialiased`}>
      <body>
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
