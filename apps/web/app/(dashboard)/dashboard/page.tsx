import Link from "next/link";
import {redirect} from "next/navigation";
import {BellIcon, CircleHelpIcon, MessageCircleIcon} from "lucide-react";

import {Button, buttonVariants} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {CreateProject} from "@/components/widgets/create-project";
import {validateRequest} from "@/lib/lucia-auth/auth";

export default function Page() {
  return (
    <main className='h-screen'>
      <header className='flex items-center justify-between p-3'>
        <div />
        <div className='flex gap-3'>
          <Link
            href='/help'
            className={buttonVariants({variant: "secondary", size: "sm"})}>
            Help
          </Link>
          <Link
            href='/feedback'
            className={buttonVariants({variant: "secondary", size: "sm"})}>
            Feedback
          </Link>
        </div>
      </header>
      <section className='flex items-center justify-between px-2'>
        <h2 className='text-3xl font-extrabold'>Dashbaord</h2>
        <CreateProject />
      </section>

      <footer>sadf</footer>
    </main>
  );
}
