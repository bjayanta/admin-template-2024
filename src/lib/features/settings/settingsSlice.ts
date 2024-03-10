import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    values: {
        isSidebarOpen: boolean
    }
}

const initialState = {
    values: {
        isSidebarOpen: true,
    }
} as InitialState

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.values.isSidebarOpen = !state.values.isSidebarOpen
        }
    }
})

// Action creators are generated for each case reducer function
export const { toggleSidebar } = settingsSlice.actions
export default settingsSlice.reducer