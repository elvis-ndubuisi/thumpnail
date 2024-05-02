import Link from "next/link";

// import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {FAQsSection} from "@/components/widgets/faqs";
import {Footer} from "@/components/widgets/footer";

export default function Page(): JSX.Element {
  return (
    <>
      <main className='mx-auto max-w-6xl px-2 md:px-1 lg:px-0'>
        {/* <ModeToggle /> */}
        <section className='mt-10 flex flex-col items-center justify-center space-y-3'>
          {/* <Badge variant='outline'>🪖Thumpnail</Badge> */}
          <h3 className='text-brand text-center font-bold'>Thumpnail</h3>
          <h1 className='max-w-2xl text-center text-5xl font-bold'>
            Improve Load Times and Enhance User Experience
          </h1>
          <p className='max-w-3xl p-3 text-center text-lg font-medium'>
            Thumpnail is a powerful SaaS platform that generates high-quality blurhash
            images for your web applications. With our simple integration and instant
            results, you can improve loading times and enhance user experience.
          </p>
          <div className='flex items-center gap-6'>
            <Button className='font-medium'>
              <Link href='/sign-up'>Get Started</Link>
            </Button>
            <Button asChild className='font-medium' variant={"ghost"}>
              <Link href='/integration'>Integration</Link>
            </Button>
          </div>
        </section>

        <FAQsSection />
      </main>
      <Footer />
    </>
  );
}
