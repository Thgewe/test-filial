import React from 'react';
import cl from "./firmName.module.css";
import {ReactComponent as Sklad} from "../../images/svg/sklad.svg";

interface IFirmNameProps {
    name: string;
    avatar?: string;
}

const FirmName = ({name, avatar}: IFirmNameProps) => {
    return (
        <div className={cl.firm}>
            <div className={cl.top}>
                {avatar
                    ? <img src={avatar} alt=""/>
                    : <div className={cl.blank}>{name[0]}</div>
                }
                <h3>название фирмы</h3>
                <div className={cl.name}>{name}</div>
            </div>
            <div className={cl.bottom}>
                <Sklad />
                <div>складской учет</div>
            </div>
        </div>
    );
};

export default FirmName;