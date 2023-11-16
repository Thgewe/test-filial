import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilial} from "../../models/filial";

interface IActiveFilialState {
    id: number;
    name: string;
}

const initialState: IActiveFilialState = {
    name: "",
    id: -1,
};

export const activeFilialSlice = createSlice({
    name: "filial",
    initialState,
    reducers: {
        setActiveFilial: (state: IActiveFilialState, action: PayloadAction<IFilial>) => {
            state.name = action.payload.name;
            state.id = action.payload.id;
        }
    }
});

export const { setActiveFilial } = activeFilialSlice.actions;
export default activeFilialSlice.reducer;