// import "@repo/ui/src/styles/global.css";
import "@repo/ui/styles/global.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {cn} from "@repo/ui/lib/utils";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Hash Blur",
    description: "Generate placeholder images",
};

export default function RootLayout({children}: {children: React.ReactNode}): JSX.Element {
    return (
        <html lang='en'>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    //   fontSans.variable
                )}>
                {children}
            </body>
        </html>
    );
}
