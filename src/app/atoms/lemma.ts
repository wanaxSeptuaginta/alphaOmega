import { create } from 'zustand';

interface LemmaState {
  lemma: string[];
  setLemma: (lemma: string[]) => void;
}

export const useLemmaStore = create<LemmaState>((set) => ({
  lemma: [""],
  setLemma: (lemma) => set({ lemma }),
}));
