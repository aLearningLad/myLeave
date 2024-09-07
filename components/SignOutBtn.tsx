"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React from "react";

const SignOutBtn = () => {
  const supabase = createClient();
  const router = useRouter();

  const signUserOut = async () => {
    try {
      const { error: signingOutError } = await supabase.auth.signOut();
      if (signingOutError) {
        throw new Error(signingOutError.message);
      }
      router.push("/");
    } catch (error) {
      console.log("Error while logging out: ", error);
    }
  };

  return (
    <button
      onClick={signUserOut}
      className=" w-fit h-fit py-2 xl:py-4 px-7 bg-red-600 mt-6 text-white rounded-lg text-2xl"
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
