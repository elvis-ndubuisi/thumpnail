import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {emailSignUpSchema} from "@/lib/schemas/auth.schema";

export default function Page() {
  // const form = useForm({
  //   defaultValues: {},
  //   resolver: zodResolver(emailSignUpSchema),
  // });
  return (
    <main>
      <h2>Sign Up</h2>
    </main>
  );
}
