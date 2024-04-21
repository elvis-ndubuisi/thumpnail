import Image from "next/image";
import {ModeToggle} from "@/components/mode-toggle";

export default function Page(): JSX.Element {
  return (
    <main className='mx-auto max-w-6xl px-2 md:px-1 lg:px-0'>
      <section>
        <h1 className='font-bold text-5xl text-center max-w-2xl'>
          Beta Testing made simple with TestFlight
        </h1>
        <p>
          TestFlight makes it easy to invite users to test your apps and App Clips
          and collect valuable feedback before releasing your apps on the App Store.
          You can invite up to 10,000 testers using just their email address or by
          sharing a public link.
        </p>
      </section>
    </main>
  );
}
