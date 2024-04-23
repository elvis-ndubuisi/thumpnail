"use client";

import React from "react";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "../ui/resizable";
import {SideNavigation} from "./side-navigation";
import {CircleGaugeIcon, ToyBrickIcon, BanknoteIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {TooltipProvider} from "../ui/tooltip";
import {Button} from "../ui/button";
import {DLINKS} from "@/assets/data/links";

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
            setIsCollapsed(!isCollapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              isCollapsed,
            )}`;
          }}
          onCollapse={() => {
            setIsCollapsed(!isCollapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              isCollapsed,
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
          <main className='p-3'>{children}</main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
