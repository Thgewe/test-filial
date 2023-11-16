import React from 'react';
import {useAppSelector} from "../hooks/redux";
import {menuRoutes} from "../constants/menuRoutes";

const CustomMenuRouter = () => {

    const page = useAppSelector(state => state.currentPageReducer);
    const route = menuRoutes.find((route) => route.id === page.elementId);

    return (
        <>
            {route && route.element}
        </>
    );
};

export default CustomMenuRouter;