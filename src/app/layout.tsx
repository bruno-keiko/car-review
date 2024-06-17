import type { Metadata } from "next";
import "./globals.css";
import classes from "./page.module.scss";
import { Roboto_Mono, Ubuntu } from "next/font/google";
import Navbar from "@/components/Navbar";
import { relative } from "path";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const inter = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  weight: "500",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <div className={classes.container}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
