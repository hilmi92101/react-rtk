import { createSlice } from "@reduxjs/toolkit";


// Define a type for the slice state
interface NotificationsState {
    count: number;
}

// Define the initial state using that type
const initialState: NotificationsState = {
    count: 110,
};

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        incrementByTwo: (state) => {
            state.count += 2;
        },
        
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const { increment, incrementByTwo, reset } = notificationsSlice.actions;

export default notificationsSlice.reducer;