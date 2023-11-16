import {configureStore} from "@reduxjs/toolkit";
import {filialAPI} from "../services/filialService";
import filialReducer from "./slices/activeFilialSlice";

export const store = configureStore({
    reducer: {
        [filialAPI.reducerPath]: filialAPI.reducer,
        filialReducer: filialReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filialAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
