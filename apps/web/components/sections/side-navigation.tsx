"use client";

import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "../ui/button";
import {LucideIcon, LogOutIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {Separator} from "../ui/separator";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    to?: string;
    icon: LucideIcon;
    variant: "default" | "ghost" | "outline";
  }[][];
}

export function SideNavigation(props: NavProps) {
  return (
    <aside
      className='group flex flex-col h-full gap-4 py-2 data-[collapsed=true]:py-2'
      data-collapsed={props.isCollapsed}>
      <div>
        <p>okay</p>
      </div>
      <Separator />

      <nav className='flex-1 flex flex-col gap-2 px-2 group-[[data-collapsed=true]]:justify-start group-[[data-collapsed=true]]:px-2'>
        {props.links[0]?.map((link, idx) =>
          props.isCollapsed ? (
            <Tooltip key={link.title + idx}>
              <TooltipTrigger asChild>
                <Link
                  href={link.to ?? "#"}
                  className={cn(
                    buttonVariants({variant: link.variant, size: "icon"}),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                  )}>
                  <link.icon className='h-4 w-4' />
                  <span className='sr-only'>{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side='right'
                className='flex items-center gap-4'>
                {link.title}
                {link.label && (
                  <span className='ml-auto text-muted-foreground'>{link.label}</span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={link.title + idx}
              href={link.to ?? "#"}
              className={cn(
                buttonVariants({variant: link.variant, size: "sm"}),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start",
              )}>
              <link.icon className='mr-2 h-4 w-4' />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" && "text-background dark:text-white",
                  )}>
                  {link.label}
                </span>
              )}
            </Link>
          ),
        )}
      </nav>
      <Separator />
      <div className='mb-3 flex flex-col gap-2 px-2 group-[[data-collapsed=true]]:justify-start group-[[data-collapsed=true]]:px-2'>
        {props.links[1]?.map((link, idx) =>
          props.isCollapsed ? (
            <Tooltip key={link.title + idx}>
              <TooltipTrigger asChild>
                <Link
                  href={link.to ?? "#"}
                  className={cn(
                    buttonVariants({variant: link.variant, size: "icon"}),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                  )}>
                  <link.icon className='h-4 w-4' />
                  <span className='sr-only'>{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side='right'
                className='flex items-center gap-4'>
                {link.title}
                {link.label && (
                  <span className='ml-auto text-muted-foreground'>{link.label}</span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={link.title + idx}
              href={link.to ?? "#"}
              className={cn(
                buttonVariants({variant: link.variant, size: "sm"}),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start",
              )}>
              <link.icon className='mr-2 h-4 w-4' />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" && "text-background dark:text-white",
                  )}>
                  {link.label}
                </span>
              )}
            </Link>
          ),
        )}
      </div>
    </aside>
  );
}
