import React from 'react';
import cl from "./iconButton.module.css";

interface IIconButtonProps extends React.PropsWithChildren {
    color?: string;
    clickHandler: () => void;
}

const IconButton = ({color, children, clickHandler}: IIconButtonProps) => {
    return (
        <button
            className={cl.button}
            onClick={clickHandler}
            style={color ? {color} : undefined}
        >
            {children}
        </button>
    );
};

export default IconButton;