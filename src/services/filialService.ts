import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFilial} from "../models/filial";
import {IMenusRequestBody, IMenusResponse} from "../models/menu";

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
        getMenuByFilialId: builder.query<IMenusResponse, IMenusRequestBody>({
            query: (obj) => ({
                url: "filial/" + obj.filialId + "/menu/",
                params: obj.params,
            })
        })
    })
})