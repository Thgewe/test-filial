import React, {memo} from 'react';
import cl from "./pagination.module.css";
import {ReactComponent as Left} from "../../images/svg/paginationLeft.svg";
import IconButton from "../IconButton/IconButton";
import {getPaginationArray} from "../../utils/getPaginationArray";

interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    step?: number;
    changePageHandler: (newPage: number) => void;
}

const Pagination = memo(({totalPages, currentPage, changePageHandler}: IPaginationProps) => {

    const arrowClickHandler = (step: -1 | 1) => {
        changePageHandler(
            (currentPage + step) <= 0
                ? 1
                : (currentPage + step >= totalPages)
                    ? totalPages
                    : currentPage + step
        )
    };

    return (
        <div className={cl.pagination}>
            <IconButton clickHandler={() => arrowClickHandler(-1)}>
                <Left />
            </IconButton>
            {getPaginationArray(currentPage, totalPages).map((key, i) => key !== -1
                ? <IconButton active={key === currentPage} key={i} clickHandler={() => changePageHandler(key)}>{key}</IconButton>
                : <div key={i}>...</div>
            )}
            <IconButton clickHandler={() => arrowClickHandler(1)}>
                <Left />
            </IconButton>
        </div>
    );
});

export default Pagination;