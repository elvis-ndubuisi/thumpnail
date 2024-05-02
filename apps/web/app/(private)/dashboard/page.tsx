import {API, ApiKeyTable} from "@/components/tables/api-key-table";
import {Button} from "@/components/ui/button";

// import {db} from "@/lib/db";

const data: API[] = [
  {
    id: "m5gr84i9",
    key: "ken99@yahoo.com",
    description: "somelioadsfjailsdjfioasdfji",
    createdAt: "asdfasdf",
  },
  {
    id: "3u1reuv4",
    description: "somelioadsfjailsdjfioasdfji",
    key: "ken99@yahoo.com",
    createdAt: "asdfasdf",
  },
  {
    id: "derv1ws0",
    description: "somelioadsfjailsdjfioasdfji",
    key: "ken99@yahoo.com",
    createdAt: "asdfasdf",
  },
];

export default async function Page() {
  return (
    <section className='p-4'>
      <div className='mb-3 space-y-2'>
        <h3 className='text-xl font-bold'>API Keys</h3>
        <p>You'll will need an api key to send request to thumpnail</p>
        <div className='flex items-center justify-start gap-3'>
          <Button>Gnerate API Key</Button>
          <span className=''>1/1</span>
        </div>
      </div>

      <section className='max-w-2xl'>
        <ApiKeyTable payload={data} />
      </section>
    </section>
  );
}
