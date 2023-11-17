import {IOption} from "./option";

export interface IFilter {
    [index: string]: string | IOption;
}

export interface IInput {
    name: string,
    order?: number;
    readonly?: boolean;
    placeholder: string;
}
export interface IDropdown {
    name: string;
    order?: number;
    options: IOption[];
}