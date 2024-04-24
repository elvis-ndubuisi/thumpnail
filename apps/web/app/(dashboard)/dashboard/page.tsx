import Link from "next/link";
import {redirect} from "next/navigation";
import {PackagePlusIcon} from "lucide-react";

import {Button, buttonVariants} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {CreateProject} from "@/components/widgets/create-project";

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

          <Button
            className='from-brand to-brand/70 hover:brand/60 text-white'
            size='sm'
            asChild>
            <Link
              href={"/projects/new-project"}
              className='flex items-center gap-2 bg-gradient-to-bl'>
              <PackagePlusIcon className='h-4 w-4' />
              <span>New project</span>
            </Link>
          </Button>
        </div>
      </header>
      <section className='flex items-center justify-between px-2'>
        <h2 className='text-3xl font-extrabold'>Dashbaord</h2>
        {/* <CreateProject /> */}
      </section>

      <footer>sadf</footer>
    </main>
  );
}
