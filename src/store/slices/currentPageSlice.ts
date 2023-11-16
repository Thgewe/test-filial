import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICurrentPage {
    elementId: number;
}

const initialState: ICurrentPage = {
    elementId: -1,
}

export const currentPageSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.elementId = action.payload;
        }
    }
})

export const {setCurrentPage} = currentPageSlice.actions;
export default currentPageSlice.reducer;