"use client";

import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {toast} from "@/components/ui/use-toast";
import {emailSignInSchema} from "@/lib/schemas/auth.schema";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {Separator} from "../ui/separator";

export function SignInForm() {
  const form = useForm<z.infer<typeof emailSignInSchema>>({
    defaultValues: {email: ""},
    resolver: zodResolver(emailSignInSchema),
  });

  function onSubmit(data: z.infer<typeof emailSignInSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto grid max-w-sm gap-4'>
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <Input
                placeholder='Enter email address'
                autoComplete='email'
                autoCorrect='off'
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          size='sm'>
          Sign in
        </Button>
        <footer className='mx-auto mt-4 grid max-w-sm'>
          <p className='font-medium'>
            By clicking continue, you agree to our{" "}
            <Link
              href='/'
              className='text-brand underline'>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href='/'
              className='text-brand underline'>
              Privacy Policy
            </Link>
            .
          </p>
        </footer>
      </form>
    </Form>
  );
}
