"use client";

import Link from "next/link";
import {LucideIcon, MoonIcon, SunMediumIcon} from "lucide-react";

import {cn} from "@/lib/utils";
import {ModeToggle} from "../mode-toggle";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import {buttonVariants} from "../ui/button";
import {Separator} from "../ui/separator";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    to?: string;
    icon: LucideIcon;
    variant: "default" | "ghost" | "outline" | "secondary";
  }[][];
}

export function SideNavigation(props: NavProps) {
  return (
    <aside
      className='group flex h-full flex-col gap-4 py-2 data-[collapsed=true]:py-2'
      data-collapsed={props.isCollapsed}>
      <div className='flex items-center gap-2 px-2 group-[[data-collapsed=true]]:justify-start group-[[data-collapsed=true]]:px-2'>
        <Avatar>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='@shadcn'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {!props.isCollapsed && (
          <div className='flex flex-col'>
            <h5 className='text-lg font-medium'>Elvisn Ndubuisi</h5>
            {/* <p className='text-sm font-medium opacity-50'>provictor.ie@gmail.com</p> */}
          </div>
        )}
      </div>
      <Separator />

      <nav className='flex flex-1 flex-col gap-2 px-2 group-[[data-collapsed=true]]:justify-start group-[[data-collapsed=true]]:px-2'>
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
                  <span className='text-muted-foreground ml-auto'>{link.label}</span>
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
                  "dark:bg-muted dark:hover:bg-muted dark:text-white dark:hover:text-white",
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
                  <span className='text-muted-foreground ml-auto'>{link.label}</span>
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
                  "dark:bg-muted dark:hover:bg-muted dark:text-white dark:hover:text-white",
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
        <ModeToggle />
        {/* TODO: Add mode toggler */}
      </div>
    </aside>
  );
}
