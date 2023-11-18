import React from 'react';
import cl from "./menuItem.module.css";
import {IMenuItemValue} from "../../models/menu";
import {ReactComponent as Trashcan} from "../../images/svg/trashcan.svg";
import {ReactComponent as Pencil} from "../../images/svg/pencil.svg";
import {ReactComponent as Charts} from "../../images/svg/charts.svg";
import IconButton from "../IconButton/IconButton";

interface IMenuItemProps {
    values: IMenuItemValue[]
}

const color = "var(--font-color-inactive)";

const MenuItem = ({values}: IMenuItemProps) => {
    return (
        <div className={cl.container}>
            <div className={cl.values}>
                {values.map((val, i) => <div
                    key={i}
                    className={cl.item + (typeof val.value === "string" ? " " + cl.list : "")}
                    style={{
                        flexBasis: val.flexBasis,
                        minWidth: val.flexBasis,
                        flexGrow: val.flexGrow,
                    }}
                    title={typeof val.value === "string"
                        ? val.value
                        : undefined
                    }
                >{typeof val.value === "string"
                    ? val.value
                    : val.value.map((str, i) => <span
                        key={i}
                        title={str}
                    >{str}</span>)
                }</div>)}
            </div>
            <div className={cl.buttons}>
                <IconButton
                    clickHandler={() => console.log('click')}
                    color={color}
                >
                    <Charts />
                </IconButton>
                <IconButton
                    clickHandler={() => console.log('click')}
                    color={color}
                >
                    <Pencil />
                </IconButton>
                <IconButton
                    clickHandler={() => console.log('click')}
                    color={color}
                >
                    <Trashcan />
                </IconButton>
            </div>
        </div>
    );
};

export default MenuItem;