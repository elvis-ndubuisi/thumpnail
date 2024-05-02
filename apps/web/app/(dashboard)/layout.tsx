import React from "react";

import {DashboardHeader} from "@/components/widgets/dashboard-header";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <>
      <DashboardHeader />
      <main> {props.children}</main>
    </>
  );
}
