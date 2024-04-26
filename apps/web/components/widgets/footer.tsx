import Link from "next/link";

import {Badge} from "../ui/badge";
import {Separator} from "../ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs";

export function Footer() {
  return (
    <footer className='bg-cbrand04/50'>
      <section></section>
      <Separator className='my-4' />
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <p>Copyright © 2024 Lineah. All rights reserved.</p>
          <div>
            <Link href={"/"}>Privacy Policy</Link>
            <Separator />
            <Link href={"/"}>Terms of Use</Link>
            <Separator />
            <Link href={"/"}>Site Map</Link>
          </div>
        </div>
        <div>theme toggle</div>
      </div>
    </footer>
  );
}
