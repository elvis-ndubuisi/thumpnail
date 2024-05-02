import React from "react";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
// import {User} from "@thumpnail/db";
import {User} from "lucia";

import {DashboardHeader} from "@/components/widgets/dashboard-header";
import {DashboardLayout} from "@/components/widgets/dashboard-layout";
import {validateRequest} from "@/lib/lucia/auth";

export default async function Layout(props: React.PropsWithChildren) {
  const {user} = await validateRequest();
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  if (!user) return redirect("/sign-in");
  return (
    <main className='flex h-screen flex-col'>
      <DashboardHeader />
      <DashboardLayout
        user={user as User}
        defaultLayout={defaultLayout}
        navCollaspedSize={4}
        defaultCollapsed={defaultCollapsed}>
        {props.children}
      </DashboardLayout>
    </main>
  );
}
