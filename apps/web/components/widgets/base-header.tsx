import Link from "next/link";

import {validateRequest} from "@/lib/lucia/auth";
import {cn} from "@/lib/utils";
import {badgeVariants} from "../ui/badge";

const LINKS = [
  {name: "Home", to: "/"},
  {name: "Docs", to: "/docs"},
];

export async function BaseHeader() {
  const {user} = await validateRequest();

  return (
    <header className='text-background dark:bg-foreground/10 bg-foreground dark:text-white'>
      <section className='mx-auto flex max-w-6xl items-center justify-between px-2 py-2 md:px-1 lg:px-0'>
        <h1 className='text-[0.9rem] font-medium opacity-80 hover:opacity-100'>
          Thumpnail
        </h1>
        <nav className='flex items-center gap-6'>
          {LINKS.map((link, idx) => (
            <Link className='text-[0.9rem]' href={link.to} key={link.to + idx}>
              {link.name}
            </Link>
          ))}
          <Link
            href={user ? "/dashboard" : "/sign-in"}
            className={cn(badgeVariants({variant: "secondary"}), "text-[0.9rem]")}>
            View account
          </Link>
        </nav>
      </section>
    </header>
  );
}
