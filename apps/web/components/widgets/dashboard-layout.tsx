"use client";

import React from "react";
// import {User} from "@thumpnail/db";
import {User} from "lucia";

import dashboardLinks from "@/assets/data/dashboard-links";
import {cn} from "@/lib/utils";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "../ui/resizable";
import {TooltipProvider} from "../ui/tooltip";
import {DashboardSidebar} from "./dashboard-sidebar";

export function DashboardLayout({
  user,
  children,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollaspedSize,
}: React.PropsWithChildren<{
  user: User;
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollaspedSize: number;
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  return (
    <TooltipProvider>
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
          maxSize={16}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
          }}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
          }}
          className={cn(
            isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out",
          )}>
          {/* <DashboardSidebar
            user={user}
            isCollapsed={isCollapsed}
            links={dashboardLinks}
          /> */}
          <DashboardSidebar
            user={user}
            isCollapsed={isCollapsed}
            links={dashboardLinks}
          />
        </ResizablePanel>

        {/* @ts-ignore */}
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
