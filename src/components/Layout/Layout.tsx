import React from 'react';
import cl from "./layout.module.css";
import FirmName from "../FirmName/FirmName";
import MenuNav from "../MenuNav/MenuNav";
import Dropdown from "../Dropdown/Dropdown";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {filialAPI} from "../../services/filialService";
import {setActiveFilial} from "../../store/slices/activeFilialSlice";
import Error from "../Error/Error";
import {IErrorApi} from "../../models/apiError";

const Layout = ({children}: React.PropsWithChildren) => {

    const filial = useAppSelector(state => state.filialReducer);
    const {data, isLoading, error} = filialAPI.useGetAllFilialsQuery();

    const dispatch = useAppDispatch();

    if (isLoading) return <div>Загрузка...</div>
    if (error && "data" in error) return <Error
        error={error as IErrorApi}
    />
    if (!data) return <div>Что-то пошло не так</div>

    return (
        <main className={cl.layout}>
            <div className={cl.left}>
                <FirmName name={"Лоскутникова В.П."} />
                <div className={cl.nav}>
                    <Dropdown
                        options={data}
                        activeOption={filial}
                        onChangeHandler={(option) => dispatch(setActiveFilial(option))}
                        label={"Филиалы"}
                    />
                    <MenuNav />
                </div>
            </div>
            <div className={cl.right}>
                {children}
            </div>
        </main>
    );
};

export default Layout;