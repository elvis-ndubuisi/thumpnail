"use client";

import {Button} from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function CreateProject() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New project</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Create new project</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
