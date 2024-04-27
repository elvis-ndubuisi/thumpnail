import Link from "next/link";
import {redirect} from "next/navigation";
import {AlertCircle, NotebookTabs, PackagePlusIcon} from "lucide-react";

import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Button, buttonVariants} from "@/components/ui/button";
import {Code} from "@/components/ui/code";
import {Separator} from "@/components/ui/separator";
import {CopyButton} from "@/components/widgets/copy-button";
import {CreateProject} from "@/components/widgets/create-project";
import {Project} from "@/components/widgets/project";

export default function Page() {
  return (
    <main className='h-screen'>
      <header className='flex items-center justify-between p-3'>
        <div className='flex items-center gap-3'>
          <NotebookTabs className='h-6 w-6' />
          <h3 className='text-2xl font-extrabold'>Dashboard</h3>
        </div>
        <div className='flex gap-3'>
          <Button
            className='from-brand to-brand02 hover:brand/60 bg-gradient-to-bl text-white'
            size='sm'
            asChild>
            <Link
              href={"/projects/new-project"}
              className='flex items-center gap-2'>
              <PackagePlusIcon className='h-4 w-4' />
              <span>New project</span>
            </Link>
          </Button>
        </div>
      </header>

      <Separator />

      <section className='p-4'>
        <Project />
      </section>
    </main>
  );
}
