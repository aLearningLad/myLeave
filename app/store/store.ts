import { Istore } from "@/interfaces";
import { create } from "zustand";

const useStore = create<Istore>()((set) => ({
  // display name
  display_name: "",
  setDisplayName: (newName: string) =>
    set((state: Istore) => ({ display_name: newName })),

  // admin onboarding value tracking
}));
