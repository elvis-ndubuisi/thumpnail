import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {CopyButton} from "@/components/widgets/copy-button";

export default function Page() {
  return (
    <main className='p-4'>
      <Header />
      <Separator className='my-4' />
      <section>asdf</section>
    </main>
  );
}

function Header() {
  return (
    <header className='flex items-center justify-between'>
      <div>
        <h3 className='text-lg font-bold'>API Keys</h3>
        <p className='opacity-90'>Here are a list of all your keys</p>
      </div>

      <div className='flex items-center gap-4'>
        <Badge
          key='key_auth_id'
          variant='secondary'
          className='ph-no-capture flex w-full justify-between gap-2 rounded-sm font-mono font-medium'>
          adsfasdfaskldfjlasdflkajdfs;kl
          <CopyButton value='share you no gree cpoaosidfjdsiof' />
        </Badge>

        <Button size='sm'>Generate Key</Button>
        <Button
          size='sm'
          variant={"outline"}>
          Delete Key
        </Button>
      </div>
    </header>
  );
}
