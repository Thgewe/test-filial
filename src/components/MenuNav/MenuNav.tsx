import React from 'react';
import cl from "./menuNav.module.css";
import {menuRoutes} from "../../constants/menuRoutes";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setCurrentPage} from "../../store/slices/currentPageSlice";

const MenuNav = () => {

    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.currentPageReducer);

    const clickHandler = (id: number) => {
        dispatch(setCurrentPage(id));
    }

    return (
        <div className={cl.menu}>
            {menuRoutes.map((route) =>
                <button
                    key={route.id}
                    data-active={page.elementId === route.id}
                    onClick={() => clickHandler(route.id)}
                >
                    {"- " + route.name}
                </button>
            )}
        </div>
    );
};

export default MenuNav;