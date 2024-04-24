import {cookies} from "next/headers";

import {DashboardPanel} from "@/components/sections/dashboard-panel";

export default function Layout({children}: React.PropsWithChildren) {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <main className='mx-auto h-screen max-w-screen-2xl'>
      <DashboardPanel
        defaultLayout={defaultLayout}
        navCollaspedSize={4}
        defaultCollapsed={defaultCollapsed}>
        {children}
      </DashboardPanel>
    </main>
  );
}
