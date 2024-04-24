"use client";

import React from "react";

import {DLINKS} from "@/assets/data/links";
import {cn} from "@/lib/utils";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "../ui/resizable";
import {TooltipProvider} from "../ui/tooltip";
import {SideNavigation} from "./side-navigation";

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
          maxSize={18}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false,
            )}`;
          }}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true,
            )}`;
          }}
          className={cn(
            isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out",
          )}>
          <SideNavigation
            isCollapsed={isCollapsed}
            links={DLINKS}
          />
        </ResizablePanel>

        {/* @ts-ignore */}
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={30}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
