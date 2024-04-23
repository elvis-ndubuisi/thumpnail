import {Button, buttonVariants} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {BellIcon, CircleHelpIcon, MessageCircleIcon} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className='h-screen'>
      <header className='flex items-center justify-between p-3'>
        <div />
        <div className='flex gap-3'>
          <Link
            href='/help'
            className={buttonVariants({variant: "secondary", size:"sm"})}>
            Help
          </Link>
          <Link
            href='/feedback'
            className={buttonVariants({variant: "secondary", size:"sm"})}>
            Feedback
          </Link>
        </div>
      </header>
      {/* <header className='flex items-center justify-between my-4'>
        <h3 className='font-bold text-2xl'>Welcome back!</h3>

        <Button size='sm'>Create project</Button>
      </header>
      <Separator /> */}
      <footer>sadf</footer>
    </main>
  );
}
