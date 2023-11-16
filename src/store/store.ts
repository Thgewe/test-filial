import {configureStore} from "@reduxjs/toolkit";
import {filialAPI} from "../services/filialService";
import filialReducer from "./slices/activeFilialSlice";
import currentPageReducer from "./slices/currentPageSlice";

export const store = configureStore({
    reducer: {
        [filialAPI.reducerPath]: filialAPI.reducer,
        filialReducer: filialReducer,
        currentPageReducer: currentPageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filialAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
