"use client";

import {PackagePlusIcon} from "lucide-react";

import {Button} from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function CreateProject() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className='from-brand to-brand/70 hover:brand/60 flex items-center gap-2 bg-gradient-to-bl text-white'
          size='sm'>
          <PackagePlusIcon className='h-4 w-4' />
          <span>New project</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Create new project</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum
          ducimus assumenda.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
