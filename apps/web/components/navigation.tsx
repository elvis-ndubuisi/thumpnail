import Link from "next/link";
import {buttonVariants} from "./ui/button";
import {Badge, badgeVariants} from "./ui/badge";

const LINKS = [
  {name: "Home", to: "/"},
  {name: "Docs", to: "/docs"},
  {name: "View Account", to: "sign-in"},
];

export function Navigation() {
  return (
    <header className='bg-black text-background dark:text-white dark:bg-foreground/5'>
      <section className='mx-auto max-w-6xl px-2 md:px-1 lg:px-0 flex items-center justify-between py-2'>
        <h1 className='font-medium text-[0.9rem] opacity-80 hover:opacity-100'>
          ThumbNail
        </h1>
        <nav className='flex items-center gap-8'>
          {LINKS.map((link, idx) => (
            <Link
              href={link.to}
              key={link.name + idx}
              className='font-normal text-[0.9rem] opacity-80 hover:opacity-100'>
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
