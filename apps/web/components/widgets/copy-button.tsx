"use client";

import * as React from "react";
import {Copy, CopyCheck} from "lucide-react";

import {cn} from "@/lib/utils";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  src?: string;
}

async function copyToClipboardWithMeta(
  value: string,
  _meta?: Record<string, unknown>,
) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({value, className, src, ...props}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <button
      type='button'
      className={cn("relative h-6 w-6 p-1 focus:outline-none ", className)}
      onClick={() => {
        copyToClipboardWithMeta(value, {
          component: src,
        });
        setHasCopied(true);
      }}
      {...props}>
      <span className='sr-only'>Copy</span>
      {hasCopied ? (
        <CopyCheck className='h-full w-full' />
      ) : (
        <Copy className='h-full w-full' />
      )}
    </button>
  );
}
