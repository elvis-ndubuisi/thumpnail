import React from "react";

import {DashboardHeader} from "@/components/dashboard-header";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <>
      <DashboardHeader />
      <main> {props.children}</main>
    </>
  );
}
