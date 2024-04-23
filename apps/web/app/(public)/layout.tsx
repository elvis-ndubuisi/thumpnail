import {Navigation} from "@/components/navigation";

export default function Layout({children}: React.PropsWithChildren) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
