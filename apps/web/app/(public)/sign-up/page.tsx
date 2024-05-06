"use client";

import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

// import {createGoogleAuthURL} from "@/actions/auth.action";
import {Button} from "@/components/ui/button";
import {Form, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {handleFacebookAuth, handleGoogleAuth} from "@/lib/auth-helpers";
import {emailSignUpSchema, EmailSignUpType} from "@/lib/schemas/auth.schema";

export default function Page() {
  const form = useForm<EmailSignUpType>({
    defaultValues: {email: "", name: ""},
    resolver: zodResolver(emailSignUpSchema),
  });

  function onSubmit(data: EmailSignUpType) {
    alert(data);
  }

  return (
    <main className='grid place-content-center'>
      <h2 className='mb-3 mt-6 text-center text-2xl font-bold'>Register</h2>
      <div className='flex items-center gap-4'>
        <form action={handleGoogleAuth}>
          <Button type='submit' variant='outline'>
            Sign up with Google
          </Button>
        </form>
        <form action={handleFacebookAuth}>
          <Button type='submit'>Sign up with Facebook</Button>
        </form>
      </div>

      <Separator className='my-6' />
      <p className='text-sm font-bold'>Sign up with email</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mx-w-sm mx-auto grid w-full gap-4'>
          <FormField
            control={form.control}
            name='name'
            render={({field}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder='given or family name'
                  autoComplete='given-name'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({field}) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type='email'
                  placeholder='email address'
                  autoComplete='email'
                  autoCorrect='on'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='grid gap-2'>
            <p className='text-sm'>
              Already have an account?{" "}
              <Link className='font-bold underline' href='/sign-in'>
                Sign in here
              </Link>
            </p>
            <Button>Sign Up</Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
