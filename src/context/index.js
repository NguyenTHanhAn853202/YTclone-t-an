import { create } from 'zustand'

const useSideBar = create((set)=>({
    mode:true,
    toggleMode: () => set(state => ({ mode:!state.mode })),
    setMode:(mode)=>set(state=>({mode:mode}))
}))

export {useSideBar}