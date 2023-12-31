import React, {useEffect, useState} from 'react';
import cl from "./dropdown.module.css";
import {IOption} from "../../models/option";

interface IDropdownProps {
    options: IOption[];
    activeOption: IOption;
    onChangeHandler: (option: IOption) => void;
    label?: string;
    order?: number;
}

const Dropdown = ({
                      options,
                      onChangeHandler,
                      activeOption,
                      label,
                      order
}: IDropdownProps) => {

    const [drop, setDrop] = useState<boolean>(false);

    const optionClickHandler = (option: IOption) => {
        onChangeHandler(option);
        setDrop(false);
    }

    const windowClickHandler = (e: MouseEvent) => {
        if (!(e.target as HTMLUListElement).classList.contains(cl.tail)) {
            setDrop(false);
        }
    }

    useEffect(() => {
        if (drop) {
            window.addEventListener("click", windowClickHandler);
        }

        return () => {
            window.removeEventListener("click", windowClickHandler);
        }
    }, [drop])

    return (
        <div
            className={cl.dropdown}
            data-drop={drop}
            style={order !== undefined ? {order} : undefined}
        >
            {label && <label className={cl.label}>{label}</label>}
            <button
                id={"dropdown-filial"}
                className={cl.head}
                onClick={(e) => {
                    e.stopPropagation();
                    setDrop(prevState => !prevState);
                }}
            >{activeOption.name || "Выберите"}</button>
            <div
                className={cl.tail}
            >
                {options.map((option) =>
                    <button
                        key={option.id}
                        data-value={option.id}
                        data-active={option.id === activeOption.id}
                        tabIndex={drop
                            ? option.id === activeOption.id ? -1 : 0
                            : -1}
                        onClick={() => optionClickHandler(option)}
                    >
                        {option.name}
                    </button>)}
            </div>
        </div>
    );
};

export default Dropdown;
