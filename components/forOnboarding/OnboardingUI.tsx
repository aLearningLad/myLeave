"use client";

import { EonboardingCategories } from "@/enums";
import { roles } from "@/misc/roles";
import { nanoid } from "nanoid";
// 1. shop name, location, then button that reads 'Create shopId' at bottom. Initiates loading spinner or similar. Alert box
// 2. how many workers do you anticipate having on your team? Prompt to generate worker keys (cool animation here)
// 3. what roles do you see yourself allocating within the shop? (fry cook, baker, cashier,
// general manager, cleaner, these are the recommended tabs, have a prompt to 'add more')
// informing that shopId value is this: xxxxx. This will be important later. 'Close' button
// 4. default leave balance days for each worker type (general, manager)
// 5. "Finish" screen showing summary of admin's configuration:
// no. of workers, assaignable roles, default leave balance, shopId, worker keys (with info button that opens modal, reminding
// admin to keep these safe as each one can only be given to a single employee)
// 6. admin create shop function:
// a. create shopId, attach it to shop object to send to supabase. This creates an admin account, shopId is unique ID
// to be attached to every employee from this shop
// b. create number of workerIDs equivalent to teamSize value. These will be shareable via link/email by admin.
// show loading spinner then present the batch of IDs on screen as little tokens with "shareable" UI directions
// c. redirect to admin panel
//
//
//
//

import { useState, useEffect, ChangeEvent } from "react";

const OnboardingUI = () => {
  const [onboardingType, setOnboardingType] = useState(
    EonboardingCategories.AD
  );
  const [slide, setSlide] = useState<number>(0);
  const [finalSlide, setFinalSlide] = useState<boolean>(false);

  // ======= FOR ADMIN ======
  // shop name
  const [shopName, setShopName] = useState<string>("");

  // shop location
  const [shopLocation, setShopLocation] = useState<string>("");

  // how many workers
  const [teamSize, setTeamSize] = useState<number>(1);

  // roles in shop
  const [rolesInShop, setRolesInShop] = useState<string[]>([]);

  const addShopRole = (role: string) => {
    setRolesInShop((prev) => [...prev, role]);
    console.log("This is the current list of roles: ", rolesInShop);
  };

  //create shop
  const adminCreateShop = async () => {
    // 1. create shopID
    const shopId = nanoid();

    // create workerIDs
    const workerIDsArray: string[] = [];
    for (let i = 0; i < teamSize + 1; i++) {
      const newId = nanoid();
      workerIDsArray.push(newId);
    }
    console.log(
      "This is the list of worker IDs for this shop: ",
      workerIDsArray,
      "and this is the shopID: ",
      shopId
    );
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
        {slide === 0 && !finalSlide && (
          <div className=" w-full h-full bg-black flex-col text-white flex justify-center items-center text-2xl">
            {/* lable and input slide up from bottom of screen, delayed with bounce */}
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
            {/* add a 'save' button here to trigger location input box to slide in */}
            <div className=" w-full flex justify-center flex-col items-center text-center">
              {/* this will slide in with bounce from right when shop name value is saved */}
              <label htmlFor="location">And where is your shop located?</label>
              <input
                type="text"
                className=" w-full h-12 md:w-10/12 outline-none focus:outline-none py-2 px-4 lg:px-5 lg:w-8/12 xl:w-6/12 rounded-lg text-[14px] lg:text-[16px] bg-slate-600"
                value={shopLocation}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setShopLocation(e.target.value)
                }
                placeholder="Eg. Tygervalley Shopping Center"
              />
            </div>
          </div>
        )}
        {slide === 1 && !finalSlide && (
          <div className=" w-full h-full bg-slate-800 text-white flex flex-col justify-center items-center text-2xl">
            <label htmlFor="workerCount">
              How many people do you employ in this shop?
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
        {slide === 2 && !finalSlide && (
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
        {slide === 3 && !finalSlide && (
          <div className=" w-full h-full bg-black text-white flex flex-col justify-center items-center text-2xl">
            <h3>How many annual leave days can you grant each employee?</h3>

            <input
              type="text"
              className=" w-6/12 md:w-4/12 lg:w-2/12 h-16 rounded-md bg-slate-300 text-black p-2 lg:p-5"
            />
          </div>
        )}
        {finalSlide && (
          <div className=" w-full h-full bg-pink-50 flex-col text-white flex justify-center items-center text-2xl">
            <h3>
              Here is a summary of your shop preferences. You can customize
              these now, or change things up later on
            </h3>
            {/* MAKE THESE INTO A BENTO GRID STYLE */}
            <div className="min-h-[75vh] border-4 border-black flex flex-col ">
              <p className=" text-black text-lg">{shopName}</p>
              <p className=" text-black text-lg">{shopLocation}</p>
              <p className=" text-black text-lg">{teamSize}</p>
              <div className=" text-black text-lg">
                {rolesInShop.map((eachRole: string) => (
                  <p>{eachRole}</p>
                ))}
              </div>
            </div>
            <section>
              <button
                onClick={adminCreateShop}
                className=" bg-black rounded-none px-4 py-2 text-white text-lg"
              >
                Proceed
              </button>
            </section>
          </div>
        )}

        <section
          className={`w-full items-center ${
            !finalSlide ? "flex flex-col lg:flex-row " : "hidden"
          } justify-center gap-2 md:gap-3 lg:gap-7 xl:gap-12 `}
        >
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
          <button
            onClick={() => setFinalSlide(true)}
            className={`${slide === 3 ? "flex " : "hidden"}`}
          >
            Finish
          </button>
        </section>
      </div>
    );
  }
};

export default OnboardingUI;
