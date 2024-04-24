"use client";

import React from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {User} from "lucia";
import {CircleGaugeIcon, PlugZap2Icon, ShieldIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {createProject} from "@/actions/project.action";
import {createProjectSchema} from "@/lib/schemas/project.schema";
import {Alert, AlertDescription, AlertTitle} from "../ui/alert";
import {Button} from "../ui/button";
import {Card} from "../ui/card";
import {Form, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {Input} from "../ui/input";
import {useToast} from "../ui/use-toast";

export function CreateProject({user}: {user: User}) {
  const [key, setKey] = React.useState<{ID: string; PK: string} | null>(null);
  const form = useForm<z.infer<typeof createProjectSchema>>({
    defaultValues: {name: ""},
    resolver: zodResolver(createProjectSchema),
  });

  async function onSubmit(data: z.infer<typeof createProjectSchema>) {
    try {
      const resp = await createProject(data);
      setKey(resp as {ID: string; PK: string});
    } catch (error) {
      // useToast
      console.error(error);
    }
  }

  return (
    <>
      <Card className='max-w-[400px] p-3'>
        <h3 className='text-2xl font-extrabold'>Create project</h3>
        <p className='mb-6 text-sm font-medium'>
          Maybe projects should be scoped to something right?
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='grid gap-6'>
            <FormField
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Project name</FormLabel>
                  <Input
                    placeholder='some name'
                    autoComplete='off'
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={
                form.formState.isSubmitting ||
                form.formState.isSubmitSuccessful === true
              }
              aria-disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting === true ? (
                <>
                  <CircleGaugeIcon className='mr-3 h-5 w-5 animate-spin' />
                  <span>Generating API key</span>
                </>
              ) : (
                <>
                  <PlugZap2Icon className='mr-3 h-6 w-6' />
                  <span>Generate API key</span>
                </>
              )}
            </Button>
          </form>
        </Form>
        {key && (
          <section className='my-3'>
            <Alert variant='destructive'>
              <ShieldIcon className='h-6 w-6' />
              <AlertTitle className='font-bold'>Heads up!</AlertTitle>
              <AlertDescription className='font-medium'>
                The generated key is only visible once.
              </AlertDescription>
            </Alert>

            <form>
              <Input
                value={key.PK}
                readOnly
              />
            </form>
            <Button
              variant='outline'
              className='border-brand text-brand hover:text-brand font-medium'>
              Copy API key
            </Button>
          </section>
        )}
      </Card>
    </>
  );
}
