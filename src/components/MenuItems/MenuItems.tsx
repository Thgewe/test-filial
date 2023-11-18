import React, {memo} from 'react';
import cl from "./menuItems.module.css";
import MenuItem from "../MenuItem/MenuItem";
import {getMenuItemValues} from "../../utils/getMenuItemValues";
import {IMenu} from "../../models/menu";

interface IMenuItemsProps {
    items: IMenu[];
}

const MenuItems = memo(({items}: IMenuItemsProps) => {
    console.log("rerender")
    return (
        <div className={cl.menu}>
            {items.map((arr) => <MenuItem
                key={arr.id}
                values={getMenuItemValues(arr)}
            />)}
        </div>
    );
});

export default MenuItems;