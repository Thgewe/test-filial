import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFilial} from "../models/filial";

export const filialAPI = createApi({
    reducerPath: "filialAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://testjob.checkport.ru/",
    }),
    endpoints: (builder) => ({
        getAllFilials: builder.query<IFilial[], void>({
            query: () => ({
                url: "filial/"
            })
        }),
    })
})