import Link from "next/link";

export function Navigation() {
  return (
    <header className='mx-auto max-w-6xl px-2 md:px-1 lg:px-0 flex items-center justify-between py-2'>
      <h1 className='font-medium'>ThumbNail</h1>
      <Link href='/'>here</Link>
      <Link href='/'>here</Link>
      <Link href='/'>here</Link>
      <Link href='/'>here</Link>
      <Link href='/'>here</Link>
    </header>
  );
}
