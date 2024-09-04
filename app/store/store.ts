import { Istore } from "@/interfaces";
import { create } from "zustand";

const useStore = create<Istore>()((set) => ({
  display_name: "",
  setDisplayName: (newName: string) =>
    set((state: Istore) => ({ display_name: newName })),
}));
