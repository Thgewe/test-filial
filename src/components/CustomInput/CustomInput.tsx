import React from 'react';
import cl from "./customInput.module.css";

interface ICustomInputProps {
    placeholder: string;
    name: string;
    value: string;
    changeHandler: (name: string, value: string) => void;
    order?: number;
}

const CustomInput = ({
                         name,
                         placeholder,
                         value,
                         changeHandler,
                         order,
}: ICustomInputProps) => {
    return (
        <input
            style={order !== undefined ? {order} : undefined}
            className={cl.input}
            placeholder={placeholder}
            value={value}
            onChange={(e) => changeHandler(name, e.target.value)}
        />
    );
};

export default CustomInput;