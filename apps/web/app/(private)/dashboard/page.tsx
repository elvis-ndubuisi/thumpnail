import {redirect} from "next/navigation";

import {ApiKeyTable} from "@/components/tables/api-key-table";
import {GenerateAPIKey} from "@/components/widgets/generate-api-key";
import {db} from "@/lib/db";
import {validateRequest} from "@/lib/lucia/auth";

export default async function Page() {
  const {user} = await validateRequest();
  if (!user) redirect("/sign-in");
  const data = await db.project.findMany({
    where: {userId: user.id},
    select: {createdAt: true, id: true, key: true, title: true},
  });
  return (
    <section className='p-4'>
      <div className='mb-3 space-y-2'>
        <h3 className='text-xl font-bold'>API Keys</h3>
        <p>You'll will need an api key to send request to thumpnail</p>
        <div className='flex items-center justify-start gap-3'>
          {/* <Button>Gnerate API Key</Button> */}
          <GenerateAPIKey />
          <span className=''>1/1</span>
        </div>
      </div>

      <section className='max-w-2xl'>
        <ApiKeyTable payload={data} />
      </section>
    </section>
  );
}
