import type { Metadata } from "next";
import { Thasadith } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/navBar";

const thasadith = Thasadith({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-thasadith'
});

export const metadata: Metadata = {
  title: "rajae rasezine",
  description: "front end developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${thasadith.variable} font-sans antialiased bg-background`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
