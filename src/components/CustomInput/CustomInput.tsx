import React from 'react';
import cl from "./customInput.module.css";

interface ICustomInputProps {
    placeholder: string;
    name: string;
    value: string;
    changeHandler: (name: string, value: string) => void;
    order?: number;
    readonly?: boolean;
}

const CustomInput = ({
                         name,
                         placeholder,
                         value,
                         changeHandler,
                         order,
                         readonly,
}: ICustomInputProps) => {
    return (
        <input
            readOnly={readonly}
            tabIndex={readonly ? -1 : 0}
            style={order !== undefined ? {order} : undefined}
            className={cl.input + (readonly ? " " + cl.read : "")}
            placeholder={placeholder}
            value={value}
            onChange={(e) => changeHandler(name, e.target.value)}
        />
    );
};

export default CustomInput;