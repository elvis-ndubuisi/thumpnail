import Link from "next/link";

import {cn} from "@/lib/utils";
import {badgeVariants} from "./ui/badge";

// const LINKS = [
//   {name: "Home", to: "/"},
//   {name: "Docs", to: "/docs"},
// ];

export function BaseHeader() {
  return (
    <header className='text-background dark:bg-foreground/10 bg-foreground dark:text-white'>
      <section className='mx-auto flex max-w-6xl items-center justify-between px-2 py-2 md:px-1 lg:px-0'>
        <h1 className='text-[0.9rem] font-medium opacity-80 hover:opacity-100'>
          Thumpnail
        </h1>
        <Link
          href={"/sign-in"}
          className={cn(
            badgeVariants({}),
            "from-brand to-brand/80 bg-gradient-to-tr text-[0.9rem]",
          )}>
          View account
        </Link>
      </section>
    </header>
  );
}
