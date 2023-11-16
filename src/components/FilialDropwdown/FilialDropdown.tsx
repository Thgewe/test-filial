import React, {useEffect, useState} from 'react';
import cl from "./filialDropdown.module.css";
import {IFilial} from "../../models/filial";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setActiveFilial} from "../../store/slices/activeFilialSlice";

interface IFilialDropdownProps {
    filialList: IFilial[];
}

const FilialDropdown = ({filialList}: IFilialDropdownProps) => {

    const [drop, setDrop] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const activeFilial = useAppSelector(state => state.filialReducer);

    const listItemClickHandler = (newValue: IFilial) => {
        dispatch(setActiveFilial({
            id: newValue.id,
            name: newValue.name,
        }))
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
        <div className={cl.dropdown} data-drop={drop}>
            <button
                className={cl.head}
                onClick={(e) => {
                    e.stopPropagation();
                    setDrop(prevState => !prevState);
                }}
            >{activeFilial.name || "Выберите"}</button>
            <div
                className={cl.tail}
            >
                {filialList.map((filial) =>
                    <button
                        key={filial.id}
                        data-value={filial.id}
                        data-active={filial.id === activeFilial.id}
                        tabIndex={drop
                            ? filial.name === activeFilial.name ? -1 : 0
                            : -1}
                        onClick={() => listItemClickHandler(filial)}
                    >
                            {filial.name}
                    </button>)}
            </div>
        </div>
    );
};

export default FilialDropdown;
