import "./globals.css";

import type {Metadata} from "next";
import localFont from "next/font/local";

import {cn} from "@/lib/utils";

const supreme = localFont({
  src: "../assets/fonts/Supreme-Variable.ttf",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Thunmpnail",
  description: "Generate placeholder images",
};

export default function RootLayout({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <html lang='en'>
      <body
        className={cn("relative min-h-screen font-sans antialiased", supreme.variable)}>
        {children}
      </body>
    </html>
  );
}
