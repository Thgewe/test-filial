import React from 'react';
import cl from "./iconButton.module.css";

interface IIconButtonProps extends React.PropsWithChildren {
    color?: string;
    clickHandler: () => void;
    active?: boolean;
}

const IconButton = ({color, children, clickHandler, active}: IIconButtonProps) => {
    return (
        <button
            className={cl.button + (active ? " " + cl.active : "")}
            onClick={clickHandler}
            style={color ? {color} : undefined}
        >
            {children}
        </button>
    );
};

export default IconButton;