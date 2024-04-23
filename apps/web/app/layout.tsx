import "@/app/globals.css";
import type {Metadata} from "next";
import {cn} from "@/lib/utils";
import localFont from "next/font/local";
import {ThemeProvider} from "@/providers/theme-provider";
import {Navigation} from "@/components/navigation";

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
          "min-h-screen bg-background font-sans antialiased relative",
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
