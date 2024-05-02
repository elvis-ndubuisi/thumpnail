"use client";

import React from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoaderCircle} from "lucide-react";
import {useForm} from "react-hook-form";
import * as z from "zod";

import {createApiKey} from "@/actions/key.action";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import {toast} from "@/components/ui/use-toast";
import {createProjectSchema} from "@/lib/schemas/project.schema";
import {Button} from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {Input} from "../ui/input";

export function GenerateAPIKey() {
  const [open, setOpen] = React.useState(false);
  const form = useForm<z.infer<typeof createProjectSchema>>({
    resolver: zodResolver(createProjectSchema),
  });

  async function onSubmit(data: z.infer<typeof createProjectSchema>) {
    try {
      await createApiKey(data);
      setOpen(false);
      toast({
        title: "Project created successfully",
        description: "Check documentation for integration and usage.",
      });
    } catch (error) {
      toast({
        title: "An error occurred",
        description: (
          <p className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            {JSON.stringify(error)}
          </p>
        ),
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={(state) => setOpen(state)}>
      <DialogTrigger asChild>
        <Button>Generate API Key</Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[475px]'>
        <DialogTitle>Generate new key</DialogTitle>
        <DialogDescription>
          HEADS UP!! The API Key generated will be{" "}
          <span className='text-medium text-red-500'>rate-limited</span> with no mechanism
          for retrying failed requests.
        </DialogDescription>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='title'
              render={({field}) => (
                <FormItem className='my-4'>
                  <FormLabel>API Description</FormLabel>
                  <FormControl>
                    <Input id='title' maxLength={78} autoFocus {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is the name that will be displayed on your profile and in emails.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button disabled={form.formState.isSubmitting}>Cancel</Button>
              </DialogClose>
              <Button type='submit' disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <LoaderCircle className='h-4 w-4 animate-spin' />
                ) : (
                  <span>Generate key</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
