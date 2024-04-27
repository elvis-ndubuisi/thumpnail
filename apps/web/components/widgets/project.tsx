import {Trash2} from "lucide-react";

import {Button} from "../ui/button";
import {Card, CardHeader, CardTitle} from "../ui/card";
import {Code} from "../ui/code";

export function Project() {
  return (
    <Card className='max-w-sm space-y-3 p-2'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-bold capitalize'>project name</h3>
        <form action=''>
          <Button
            variant={"ghost"}
            size={"icon"}>
            <Trash2 className='h-5 w-5 text-red-500' />
          </Button>
        </form>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-sm'>API Key</p>
        <Code className='flex-1'>adsfjasdlfkj</Code>
      </div>
    </Card>
  );
}
