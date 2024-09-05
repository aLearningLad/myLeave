"use client";

import { createClient } from "@/utils/supabase/client";

export default function Home() {
  const supabase = createClient();

  const signUserIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
    } catch (error) {
      console.log("Error while trying to sign in: ", error);
    }
  };

  return (
    <main className=" min-h-screen flex flex-col items-center justify-center px-1 py-3 md:px-2 lg:px-12 lg:py-10 xl:px-16 xl:py-8">
      Hi there! Welcome!
      <button
        onClick={signUserIn}
        className=" w-fit h-fit py-2 xl:py-4 px-7 bg-black text-white rounded-lg text-2xl"
      >
        Sign In Here
      </button>
    </main>
  );
}
