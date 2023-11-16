import {ReactNode} from "react";

export interface IMenuRoute {
    id: number;
    name: string;
    path: string;
    element: ReactNode;
}