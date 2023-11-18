import {IFilial} from "./filial";
import {ITt} from "./tt";
import {IOption} from "./option";
import {IFilter} from "./filter";

export interface IMenu {
    id: number;
    name: string;
    filial: IFilial;
    tt: ITt;
    active: boolean;
    export: string[];
}
export interface IMenuParams {
    limit?: number;
    page?: number;
    name?: string;
    filial?: string;
    tt?: string;
    active?: "active" | "no_active";
}
export interface IMenuFilter extends IFilter{
    menu: string;
    filial: string;
    store: string;
    export: string;
    isActive: IOption;
}
export interface IMenuItemValue {
    flexBasis: string;
    flexGrow: string;
    value: string | string[];
}