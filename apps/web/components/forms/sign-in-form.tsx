"use client";

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {emailSignInSchema} from "@/lib/schemas/auth.schema";
import {Button} from "../ui/button";
import {Separator} from "../ui/separator";
import Link from "next/link";
import {Input} from "../ui/input";
import {
  FormField,
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import {toast} from "@/components/ui/use-toast";

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
        className='grid gap-4 max-w-sm mx-auto'>
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
        <footer className='max-w-sm mx-auto grid mt-4'>
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
