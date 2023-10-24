import { create } from "zustand";

export interface Main {
  isBubbleViewOpen: boolean,
  isJSONTreeViewOpen: boolean,
  setIsBubbleViewOpen: (newVal: boolean) => void,
  setIsJSONTreeViewOpen: (newVal: boolean) => void
}

export const useMainStore = create<Main>((set) => ({
  isBubbleViewOpen: false,
  isJSONTreeViewOpen: false,
  setIsBubbleViewOpen: (newVal: boolean) => set(state => ({
    isBubbleViewOpen: newVal
  })),
  setIsJSONTreeViewOpen: (newVal: boolean) => set(state => ({
    isJSONTreeViewOpen: newVal
  }))
}))