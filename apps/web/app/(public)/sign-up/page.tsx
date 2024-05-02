import {createGoogleAuthURL} from "@/actions/auth.action";
import {Button} from "@/components/ui/button";

export default function Page() {
  return (
    <main className='grid place-content-center'>
      <h2>Register here</h2>
      <div className='flex items-center gap-4'>
        <form action={createGoogleAuthURL}>
          <Button type='submit' variant='outline'>
            Google
          </Button>
        </form>
        <Button>Facebook</Button>
      </div>
    </main>
  );
}
