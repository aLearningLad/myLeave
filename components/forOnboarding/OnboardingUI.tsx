"use client";

import { EonboardingCategories } from "@/enums";
// 1. how many workers do you anticipate having on your team? Prompt to generate worker keys (cool animation here)
// 2. what roles do you see yourself allocating within the shop? (fry cook, baker, cashier,
// general manager, cleaner, these are the recommended tabs, have a prompt to 'add more')
// 3. shop name, location, then button that reads 'Create shopId' at bottom. Initiates loading spinner or similar. Alert box
// informing that shopId value is this: xxxxx. This will be important later. 'Close' button
// 4. default leave balance days for each worker type (general, manager)
// 5. "Finish" screen showing summary of admin's configuration:
// no. of workers, assaignable roles, default leave balance, shopId, worker keys (with info button that opens modal, reminding
// admin to keep these safe as each one can only be given to a single employee)

import { useState, useEffect } from "react";

const OnboardingUI = () => {
  const [onboardingType, setOnboardingType] = useState(
    EonboardingCategories.AD
  );
  const [slide, setSlide] = useState<number>(0);

  // how many workers
  const [teamSize, setTeamSize] = useState<number>(1);

  if (onboardingType === EonboardingCategories.WO) {
    return (
      <div className=" w-full border-4 border-orange-400 h-screen lg:h-[85vh]">
        Worker onboarding
      </div>
    );
  }

  if (onboardingType === EonboardingCategories.AD) {
    return (
      <div className=" w-full border-4 border-orange-400 h-screen lg:h-[85vh] flex flex-col items-center justify-center">
        {slide === 0 && (
          <div className=" w-full h-full bg-black flex-col text-white flex justify-center items-center text-2xl">
            <input type="text" />
          </div>
        )}
        {slide === 1 && (
          <div className=" w-full h-full bg-black text-white flex justify-center items-center text-2xl">
            slide 2
          </div>
        )}
        {slide === 2 && (
          <div className=" w-full h-full bg-black text-white flex justify-center items-center text-2xl">
            slide 3
          </div>
        )}
        {slide === 3 && (
          <div className=" w-full h-full bg-black text-white flex justify-center items-center text-2xl">
            slide 4
          </div>
        )}
        <section className=" w-full flex items-center justify-center gap-2 md:gap-3 lg:gap-7 xl:gap-12 flex-col lg:flex-row ">
          <button
            onClick={(e) => setSlide((prev) => prev - 1)}
            className={`border-2 ${
              slide <= 0 && "hidden"
            } border-red-600 rounded-lg bg-white h-9 text-black px-3 py-1`}
            disabled={slide <= 0}
          >
            Previous
          </button>
          <button
            onClick={(e) => setSlide((prev) => prev + 1)}
            className={`border-2 ${
              slide >= 3 && "hidden"
            } border-red-600 rounded-lg bg-white h-9 text-black px-3 py-1`}
            disabled={slide >= 3}
          >
            Next
          </button>
        </section>
      </div>
    );
  }
};

export default OnboardingUI;
