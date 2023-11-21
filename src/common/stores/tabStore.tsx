import { create } from "zustand";
import { PersonData } from "../interfaces/person-data";

export const useTabtore = create((set) => ({
  open: false,
  target: undefined,
  openTab: (person: PersonData) => set({ open: true, target: person }),
  closeTab: () => set({ open: false, target: undefined }),
}));
