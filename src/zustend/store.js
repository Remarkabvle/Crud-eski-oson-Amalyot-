import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 8,
  lions: 0,
  inc: () => set((state) => ({ bears: state.bears + 1 })),
  dec: () => set((state) => ({ bears: state.bears- 1 })),
  reset: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
  incLion: (payload) => set((state) => ({lions: state.lions + payload}))
}))

export default useStore