"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const SignInBtn = () => {
  const supabase = createClient();
  const router = useRouter();

  const signUserIn = async () => {
    try {
      const { data, error: signInError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/home",
        },
      });

      if (signInError) {
        throw new Error(signInError.message);
      }
    } catch (error) {
      console.log("Error while trying to sign in: ", error);
    }
  };

  return (
    <button
      onClick={signUserIn}
      className=" w-fit h-fit py-2 xl:py-4 px-7 bg-black text-white rounded-lg text-2xl"
    >
      Sign In Here
    </button>
  );
};

export default SignInBtn;
