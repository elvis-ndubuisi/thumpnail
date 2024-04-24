import Link from "next/link";

import {Badge, badgeVariants} from "./ui/badge";
import {buttonVariants} from "./ui/button";

const LINKS = [
  {name: "Home", to: "/"},
  {name: "Docs", to: "/docs"},
  {name: "View Account", to: "sign-in"},
];

export function Navigation() {
  return (
    <header className='text-background dark:bg-foreground/5 bg-black dark:text-white'>
      <section className='mx-auto flex max-w-6xl items-center justify-between px-2 py-2 md:px-1 lg:px-0'>
        <h1 className='text-[0.9rem] font-medium opacity-80 hover:opacity-100'>
          ThumbNail
        </h1>
        <nav className='flex items-center gap-8'>
          {LINKS.map((link, idx) => (
            <Link
              href={link.to}
              key={link.name + idx}
              className='text-[0.9rem] font-normal opacity-80 hover:opacity-100'>
              {link.name}
            </Link>
          ))}
          <Link
            href='/sign-in'
            className={badgeVariants({variant: "default"})}>
            View account
          </Link>
        </nav>
      </section>
    </header>
  );
}
