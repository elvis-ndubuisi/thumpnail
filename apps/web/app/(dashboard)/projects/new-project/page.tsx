import {CreateProject} from "@/components/forms/create-project";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {validateRequest} from "@/lib/lucia-auth/auth";

export default async function Page() {
  const {user} = await validateRequest();

  return (
    <main className='flex h-screen flex-col items-center justify-center gap-8 p-3 md:flex-row'>
      <CreateProject user={user!} />
    </main>
  );
}
