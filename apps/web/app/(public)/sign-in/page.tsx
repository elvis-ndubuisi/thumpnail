"use client";

import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import {Form, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {toast} from "@/components/ui/use-toast";
import {handleFacebookAuth, handleGoogleAuth} from "@/lib/auth-helpers";
import {emailSignInSchema, EmailSignInType} from "@/lib/schemas/auth.schema";

export default function Page() {
  const form = useForm<EmailSignInType>({
    defaultValues: {email: ""},
    resolver: zodResolver(emailSignInSchema),
  });

  function onSubmit(data: EmailSignInType) {
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
    <main>
      <section className='mt-12'>
        <h3 className='text-center text-2xl font-black'>Sign In</h3>
        <p className='my-3 text-center text-lg font-medium'>
          {/* Enter your email below to process */}
          Welcome back 😁 !!
        </p>
        <header className='mx-auto mb-4 mt-4 grid w-full max-w-sm gap-3'>
          <Button onClick={handleGoogleAuth}>Sign in with Google</Button>
          <Button onClick={handleFacebookAuth} variant={"outline"}>
            Sign in with Facebook
          </Button>
        </header>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mx-auto grid max-w-sm gap-4'>
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
            <div className='grid gap-2'>
              <p className='text-sm'>
                Don't have an account?{" "}
                <Link href='/sign-up' className='font-bold underline'>
                  Sign up here
                </Link>
              </p>
              <Button type='submit'>Sign in</Button>
            </div>
            <footer className='mx-auto mt-4 grid max-w-sm text-sm'>
              <p className='font-medium'>
                By clicking continue, you agree to our{" "}
                <Link href='/' className='text-brand underline'>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href='/' className='text-brand underline'>
                  Privacy Policy.
                </Link>
              </p>
            </footer>
          </form>
        </Form>
      </section>
    </main>
  );
}
