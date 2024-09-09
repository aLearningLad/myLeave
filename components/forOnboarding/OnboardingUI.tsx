"use client";

import { EonboardingCategories } from "@/enums";
import { roles } from "@/misc/roles";
// 1. shop name, location, then button that reads 'Create shopId' at bottom. Initiates loading spinner or similar. Alert box
// 2. how many workers do you anticipate having on your team? Prompt to generate worker keys (cool animation here)
// 3. what roles do you see yourself allocating within the shop? (fry cook, baker, cashier,
// general manager, cleaner, these are the recommended tabs, have a prompt to 'add more')
// informing that shopId value is this: xxxxx. This will be important later. 'Close' button
// 4. default leave balance days for each worker type (general, manager)
// 5. "Finish" screen showing summary of admin's configuration:
// no. of workers, assaignable roles, default leave balance, shopId, worker keys (with info button that opens modal, reminding
// admin to keep these safe as each one can only be given to a single employee)

import { useState, useEffect, ChangeEvent } from "react";

const OnboardingUI = () => {
  const [onboardingType, setOnboardingType] = useState(
    EonboardingCategories.AD
  );
  const [slide, setSlide] = useState<number>(0);

  // ======= FOR ADMIN ======
  // shop name
  const [shopName, setShopName] = useState<string>("");
  // how many workers
  const [teamSize, setTeamSize] = useState<number>(1);

  // roles in shop
  const [rolesInShop, setRolesInShop] = useState<string[]>([]);

  const addShopRole = (role: string) => {
    setRolesInShop((prev) => [...prev, role]);
    console.log("This is the current list of roles: ", rolesInShop);
  };

  // ===== FOR WORKERS =====

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
            <label htmlFor="shopName">What is the name of your shop?</label>
            <input
              type="text"
              className=" w-full h-12 md:w-10/12 outline-none focus:outline-none py-2 px-4 lg:px-5 lg:w-8/12 xl:w-6/12 rounded-lg text-[14px] lg:text-[16px] bg-slate-600"
              value={shopName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setShopName(e.target.value)
              }
              placeholder="Eg. The Milkyway Pizzeria"
            />
          </div>
        )}
        {slide === 1 && (
          <div className=" w-full h-full bg-slate-800 text-white flex flex-col justify-center items-center text-2xl">
            <label htmlFor="workerCount">
              How many employees do you expect in this shop?
            </label>
            <section className=" flex justify-center items-center gap-2 w-full md:w-6/12 lg:w-3/12">
              <p>0</p>
              <input
                type="range"
                value={teamSize}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTeamSize(e.target.valueAsNumber)
                }
                min={1}
                max={100}
                className=" w-full h-4 rounded-lg text-white bg-neutral-200 cursor-pointer"
              />
              <p>100</p>
            </section>

            <span className=" mt-3 lg:mt-6 py-2 px-4 lg:px-6 flex justify-center items-center rounded-md border-2 border-neutral-300">
              {teamSize}
            </span>
          </div>
        )}
        {slide === 2 && (
          <div className="w-full h-full bg-black text-white flex flex-col gap-2 justify-center items-center text-2xl">
            <h3>What kinds of roles do you plan to allocate in your store?</h3>

            <div className="h-[80vh] md:h-[75vh] lg:h-[50vh] w-full md:w-8/12 lg:w-6/12 border-4 border-white ">
              <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-2 overflow-auto gap-4">
                {roles.map((role) => (
                  <button
                    className=" h-32 w-full mx-3 my-1 bg-white text-black rounded-lg"
                    key={role}
                    onClick={(e) => addShopRole(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
            <section>
              <button className="bg-white px-3 py-2 text-black rounded-md">
                Add more
              </button>
            </section>
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
