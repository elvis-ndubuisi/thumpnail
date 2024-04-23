"use client";

import React from "react";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "../ui/resizable";
import {SideNavigation} from "./side-navigation";
import {CircleGaugeIcon, ToyBrickIcon, BanknoteIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {TooltipProvider} from "../ui/tooltip";

export function DashboardPanel({
  children,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollaspedSize,
}: React.PropsWithChildren<{
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollaspedSize: number;
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction='horizontal'
        className='h-full items-stretch'
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
        }}>
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollaspedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(!isCollapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              isCollapsed,
            )}`;
          }}
          //   onCollapse={(collapsed) => {
          //     setIsCollapsed(collapsed);
          //     document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          //       collapsed,
          //     )}`;
          //   }}
          className={cn(
            isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out",
          )}>
          <SideNavigation
            isCollapsed={isCollapsed ?? false}
            links={[
              {
                icon: CircleGaugeIcon,
                label: "128",
                title: "Dashboard",
                variant: "default",
              },
              {
                title: "Integration",
                label: "Integration",
                icon: ToyBrickIcon,
                variant: "default",
              },
              {
                title: "Billing",
                label: "",
                icon: BanknoteIcon,
                variant: "ghost",
              },
            ]}
          />
          <aside>aside here</aside>
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={30}>
          <main className='p-3'>{children}</main>
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <main>another one</main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
