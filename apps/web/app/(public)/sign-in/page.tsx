"use client";

import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {createFacebookAuthURL, createGoogleAuthURL} from "@/actions/auth.actions";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {toast} from "@/components/ui/use-toast";
import {emailSignInSchema} from "@/lib/schemas/auth.schema";

export default function Page() {
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

  async function handleGoogleAuth() {
    const resp = await createGoogleAuthURL();
    if (resp.error) {
      console.error(resp.error);
    } else if (resp.success) {
      window.location.href = resp.data.toString();
    }
  }

  async function handleFacebookAuth() {
    // const resp = await createFacebookAuthURL();
  }

  return (
    <main>
      <section className='mt-12'>
        <h3 className='text-center text-2xl font-bold'>Sign In</h3>
        <p className='my-4 text-center text-lg font-medium'>
          Enter your email below to process
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mx-auto grid max-w-sm gap-4'>
            <header className='mx-auto mt-4 grid w-full max-w-sm gap-3'>
              <Button
                size='sm'
                variant='outline'
                onClick={handleGoogleAuth}>
                Sign in with google
              </Button>
              <Button
                onClick={handleFacebookAuth}
                className='bg-brand hover:bg-brand/80 text-white hover:text-white'
                size='sm'
                variant={"outline"}>
                Sign in with facebook
              </Button>
            </header>

            <div className='flex items-center justify-center gap-3'>
              <Separator className='flex-1' />
              <p className='text-xs font-medium'>OR CONTINUE WITH EMAIL</p>
              <Separator className='flex-1' />
            </div>

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
      </section>
    </main>
  );
}
