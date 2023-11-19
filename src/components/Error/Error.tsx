import React from 'react';
import cl from "./error.module.css";
import {IErrorApi, INotFoundErrorApi} from "../../models/apiError";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

interface IErrorProps {
    error: IErrorApi | INotFoundErrorApi | FetchBaseQueryError | SerializedError;
}

const Error = ({error}: IErrorProps) => {
    if ("data" in error) {
        const knownError = error as IErrorApi | INotFoundErrorApi;
        if ("detail" in knownError.data) return (
            <div className={cl.error}>
                <h1>{knownError.status}</h1>
                <p>{knownError.data.detail}</p>
            </div>
        )
        if ("message" in knownError.data) return (
            <div className={cl.error}>
                <h1>Ошибка {knownError.status}</h1>
                <p>{knownError.data.message}</p>
            </div>
        )
    } else if ("message" in error || "code" in error){
        return (
            <div className={cl.error}>
                <h1>{error.code && error.code}</h1>
                <p>{error.message && error.message}</p>
            </div>
        );
    }

    return (
        <div className={cl.error}>
            <h1>Неизвестная ошибка</h1>
        </div>
    );
};

export default Error;