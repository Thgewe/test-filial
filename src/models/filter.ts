import {IOption} from "./option";

export interface IFilter {
    [index: string]: string | IOption;
}