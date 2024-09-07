import SignInBtn from "@/components/SignInBtn";
import SignOutBtn from "@/components/SignOutBtn";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data: userData, error } = await supabase.auth.getUser();

  const user = userData.user?.email;

  return (
    <main className=" min-h-screen flex flex-col items-center justify-center px-1 py-3 md:px-2 lg:px-12 lg:py-10 xl:px-16 xl:py-8">
      Hi there! {user}
      <SignOutBtn />
    </main>
  );
}
