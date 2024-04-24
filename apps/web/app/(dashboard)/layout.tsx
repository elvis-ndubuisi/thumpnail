import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {User} from "database/orms";

import {DashboardPanel} from "@/components/sections/dashboard-panel";
import {validateRequest} from "@/lib/lucia-auth/auth";

export default async function Layout({children}: React.PropsWithChildren) {
  const {user} = await validateRequest();
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  if (!user) return redirect("/sign-in");

  return (
    <main className='mx-auto h-screen max-w-screen-2xl'>
      <DashboardPanel
        user={user as User}
        defaultLayout={defaultLayout}
        navCollaspedSize={4}
        defaultCollapsed={defaultCollapsed}>
        {children}
      </DashboardPanel>
    </main>
  );
}
