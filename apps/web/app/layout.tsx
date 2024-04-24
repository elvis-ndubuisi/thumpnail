import "@/app/globals.css";

import type {Metadata} from "next";
import localFont from "next/font/local";

import {Navigation} from "@/components/navigation";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/providers/theme-provider";

const Satoshi = localFont({
  src: "../assets/font/Satoshi-Variable.ttf",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Thumpnail",
  description: "Generate placeholder images",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body
        className={cn(
          "bg-background relative min-h-screen font-sans antialiased",
          Satoshi.variable,
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {/* <Navigation /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
