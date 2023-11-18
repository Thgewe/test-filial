import React from 'react';
import cl from "./filter.module.css";
import CustomInput from "../CustomInput/CustomInput";
import Dropdown from "../Dropdown/Dropdown";
import {IOption} from "../../models/option";
import {IDropdown, IFilter, IInput} from "../../models/filter";

// поля "name", в inputs и dropdowns,
// должны соответствовать полям в filter
interface IFilterProps {
    filter: IFilter;
    dropdowns?: IDropdown[];
    inputs?: IInput[];
    dropdownChangeHandler: (filterName: string, option: IOption) => void;
    inputChangeHandler: (filterName: string, value: string) => void;
}

const Filter = ({
                    filter,
                    inputs,
                    inputChangeHandler,
                    dropdownChangeHandler,
                    dropdowns
}: IFilterProps) => {
    return (
        <div className={cl.filter}>
            <div className={cl.container}>
                {inputs && inputs.map((input) => <CustomInput
                    key={input.name}
                    order={input.order}
                    readonly={input.readonly}
                    placeholder={input.placeholder}
                    name={input.name}
                    value={filter[input.name] as string}
                    changeHandler={inputChangeHandler}
                />)}
                {dropdowns && dropdowns.map((drop) => <Dropdown
                    key={drop.name}
                    order={drop.order}
                    options={drop.options}
                    activeOption={drop.options.find((option) =>
                        // Мы уверены, что filter[drop.name] существует,
                        // и он типа IOption
                        (filter[drop.name] as IOption).id === option.id)!
                    }
                    onChangeHandler={(option) => dropdownChangeHandler(drop.name, option)}
                />)}
            </div>
        </div>
    );
};

export default Filter;