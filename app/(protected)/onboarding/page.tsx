//two options: 1. create admin/shop, 2. create worker
//
// 1. create admin assigns a shopId (primary key) to be shared between all workers & the admin itself. Also, admin needs to
// specify how many workers they anticipate having (system will automatically add +4 as contingency)
// This is needed because system will create enough worker keys (array of UUIDs as strings, one
// assignable to a worker) which admin can give to each worker to enable them to sign up
// ===> worker key is nanoid (install this).
// **admin needs to determine value for initial leave balance for gen worker and manager.
// ====> so admin will:
// (i) create their shop account
// (ii) add shop details:
// (iii) specify team size: 1-5, 6-10, 11-15, contact sales
// (iv) recieve worker keys on dashboard
// (v) setup employee stations / cubicles and share keys via links

// 2. create worker will require shopId
//   takes in shopId first before proceeding to next screens, otherwise toaster notif pops up
//   next screen is for display_name, with remainder of TuserDetails being autofilled from Google Acc
// and default values

import OnboardingUI from "@/components/forOnboarding/OnboardingUI";
import React from "react";

const OnboardingPage = () => {
  return (
    <main className=" w-full min-h-screen flex flex-col items-center justify-center relative">
      <header className=" w-full p-1 md:px-2 md:py-1 lg:px-5 lg:py-3 flex justify-center items-center sticky top-0 lg:relative h-12 lg:h-20 border-4 border-black ">
        Let's get started!
      </header>
      <OnboardingUI />
    </main>
  );
};

export default OnboardingPage;
