import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { resetCountFromFakeApi } from "../../api/fakeApi";

// thunk
export const resetCountViaApi = createAsyncThunk(
    "notifications/resetCountViaApi",
    async () => {
        try {
            const response = await resetCountFromFakeApi();
            return response.success;
        } catch (err) {

            // handle error like alert here
            console.log('gg we error')
            alert((err as Error).message);
            throw new Error("");
        }
    }
);

// Define a type for the slice state
interface NotificationsState {
    count: number;
    resetStatus: "loading" | "error" | "idle";
}

// Define the initial state using that type
const initialState: NotificationsState = {
    count: 110,
    resetStatus: "idle",
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
    extraReducers(builder) {
        builder
            .addCase(resetCountViaApi.pending, (state) => {
                state.resetStatus = "loading";
                console.log(state.resetStatus)

            })
            .addCase(resetCountViaApi.fulfilled, (state) => {
                state.resetStatus = "idle";
                state.count = 0;

                console.log(state.resetStatus)
            })
            .addCase(resetCountViaApi.rejected, (state) => {
                state.resetStatus = "error";
                console.log(state.resetStatus)
            });
    },
});

export const { increment, incrementByTwo, reset } = notificationsSlice.actions;

export default notificationsSlice.reducer;