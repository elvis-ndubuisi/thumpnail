"use client";

import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  FormField,
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {toast} from "@/components/ui/use-toast";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

const schema = z.object({email: z.string().email("A valid email is required")});

export default function Page() {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {email: ""},
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
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
        <h3 className='font-bold text-2xl text-center'>Sign In</h3>
        <p className='text-center font-medium my-4 text-lg'>
          Enter your email below to process
        </p>
        <Form {...form}>
          <form
            onSubmit={onSubmit}
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
                </FormItem>
              )}
            />

            <Button
              type='submit'
              size='sm'>
              Sign in with Email
            </Button>

            <div className='flex items-center justify-center gap-3'>
              <Separator className='flex-1' />
              <p className='text-xs font-medium'>OR CONTINUE WITH</p>
              <Separator className='flex-1' />
            </div>
          </form>
          <footer className='max-w-sm mx-auto grid gap-3 mt-4'>
            <Button size='sm'>Google</Button>
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
        </Form>
      </section>
    </main>
  );
}
