import {PropsWithChildren} from "react";

import {BaseHeader} from "@/components/base-header";

export default function Layout({children}: PropsWithChildren) {
  return (
    <>
      <BaseHeader />
      {children}
    </>
  );
}
