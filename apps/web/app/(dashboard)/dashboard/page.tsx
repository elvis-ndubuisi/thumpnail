import Link from "next/link";
import {redirect} from "next/navigation";
import {AlertCircle, PackagePlusIcon} from "lucide-react";

import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Button, buttonVariants} from "@/components/ui/button";
import {Code} from "@/components/ui/code";
import {Separator} from "@/components/ui/separator";
import {CopyButton} from "@/components/widgets/copy-button";
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
      <section className='flex items-center justify-between px-2'>
        <h2 className='text-3xl font-extrabold'>Dashbaord</h2>
        {/* <CreateProject /> */}
      </section>

      <footer>sadf</footer>

      <div className='w-full max-sm:p-4'>
        <div>
          <p className='mb-4 text-xl font-bold'>Your API Key</p>
          <Alert>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>
              This key is only shown once and can not be recovered{" "}
            </AlertTitle>
            <AlertDescription>
              Please pass it on to your user or store it somewhere safe.
            </AlertDescription>
          </Alert>

          <Code className='ph-no-capture my-8 flex w-full items-center justify-between gap-4 max-sm:text-xs sm:overflow-hidden'>
            <pre>adfadsfasdgasdgfasdfadsfdsfadsf</pre>
            <div className='flex items-start justify-between gap-4 max-sm:absolute max-sm:right-11'>
              {/* <VisibleButton isVisible={showKey} setIsVisible={setShowKey} /> */}
              <CopyButton value={"sadfiasldfjiaosdfjioasdfpasiodfo"} />
            </div>
          </Code>
        </div>
      </div>
    </main>
  );
}
