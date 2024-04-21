import Image from "next/image";
import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FAQsSection} from "@/components/sections/faqs";

export default function Page(): JSX.Element {
  return (
    <>
      {/* <div className='absolute top-0 left-0 right-0 h-screen'>
        <div className='w-40 h-40 aspect-square rounded-lg bg-gray-700 absolute top-[20%] left-[5%] -z-10' />
        <div className='w-40 h-40 aspect-square rounded-lg bg-gray-700 absolute top-[20%] right-[5%] -z-10' />
        <div className='w-40 h-40 aspect-square rounded-lg bg-gray-700 absolute top-[60%] left-[15%] -z-10' />
        <div className='w-40 h-40 aspect-square rounded-lg bg-gray-700 absolute top-[60%] right-[15%] -z-10' />
        <div className='w-40 h-40 aspect-square rounded-lg bg-gray-700 absolute bottom-[10%] left-[50%] -z-10 -translate-x-1/2' />
      </div> */}
      <main className='mx-auto max-w-6xl px-2 md:px-1 lg:px-0'>
        {/* <ModeToggle /> */}
        <section className='mt-10 flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-center text-brand'>Thumpnail</h3>
          <h1 className='font-bold text-5xl text-center max-w-2xl'>
            Improve Load Times and Enhance User Experience
          </h1>
          <p className='max-w-3xl text-center p-3 text-lg font-medium'>
            Thumpnail is a powerful SaaS platform that generates high-quality
            blurhash images for your web applications. With our simple integration
            and instant results, you can improve loading times and enhance user
            experience.
          </p>
          <div className='flex items-center gap-6'>
            <Button
              className='font-medium'
              size={"sm"}>
              <Link href='/sign-up'>Get Started</Link>
            </Button>
            <Button
              asChild
              className='font-medium'
              variant={"ghost"}
              size={"sm"}>
              <Link href='/integration'>Integration</Link>
            </Button>
          </div>
        </section>

        <FAQsSection />
      </main>
    </>
  );
}
