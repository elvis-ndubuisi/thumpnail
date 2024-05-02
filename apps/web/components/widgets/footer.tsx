import Link from "next/link";

// import {Badge} from "../ui/badge";
import {Separator} from "../ui/separator";

// import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs";

export function Footer() {
  return (
    <footer className='mt-6 pb-8'>
      <section className='h-9 bg-red-400'></section>
      <Separator className='my-4' />
      <div className='mx-auto flex max-w-screen-xl items-center justify-between text-sm'>
        <p>Copyright © 2024 Lineah. All rights reserved.</p>
        <div className='flex items-center gap-2'>
          <Link href={"/"}>Privacy Policy</Link>
          <Separator orientation='vertical' />
          <Link href={"/"}>Terms of Use</Link>
          <Separator orientation='vertical' />
          <Link href={"/"}>Site Map</Link>
        </div>
        <div>theme toggle</div>
      </div>
    </footer>
  );
}
