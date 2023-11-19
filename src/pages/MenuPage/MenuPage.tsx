import React, {useEffect, useState, useRef} from 'react';
import cl from "./menuPage.module.css";
import Filter from "../../components/Filter/Filter";
import {IOption} from "../../models/option";
import {filialAPI} from "../../services/filialService";
import {IMenuFilter, IMenusRequestBody} from "../../models/menu";
import {changeDebounce} from "../../utils/debounce";
import {inputs, dropdowns, options} from "../../constants/menuFilterFields";
import {useAppSelector} from "../../hooks/redux";
import MenuItems from "../../components/MenuItems/MenuItems";
import Pagination from "../../components/Pagination/Pagination";

const debouncedDelayChange = changeDebounce<{
    filialId: number,
    menu: IMenuFilter,
    changeHandler: (filter: IMenusRequestBody, preferCachedValue: boolean) => void
}>((obj) => {
    if (obj) {
        obj.changeHandler({
            filialId: obj.filialId,
            params: {
                limit: 3,
                page: 1,
                active: obj.menu.isActive.id === 1 ? "active" : "no_active",
                name: obj.menu.menu,
                filial: obj.menu.filial,
                tt: obj.menu.store
            }
        }, true);
    }
}, 300);

// TODO: - Error handling

const MenuPage = () => {
    const [filter, setFilter] = useState<IMenuFilter>({
        menu: "",
        filial: "",
        store: "",
        export: "",
        isActive: options[1],
    });
    const page = useRef<number>(1);
    const {id} = useAppSelector(state => state.filialReducer);

    const changeHandler = (name: string, value: IOption | string) => {
        setFilter({
            ...filter,
            [name]: value,
        })
    }
    const pageChangeHandler = (newPage: number) => {
        page.current = newPage;
        trigger({
            filialId: id,
            params: {
                limit: 3,
                page: page.current,
                active: filter.isActive.id === 1 ? "active" : "no_active",
                name: filter.menu,
                filial: filter.filial,
                tt: filter.store
            }
        }, true)
    }

    const [trigger, result] = filialAPI.endpoints.getMenuByFilialId.useLazyQuery();

    useEffect(() => {
        if (id > 0) {
            debouncedDelayChange({
                filialId: id,
                menu: filter,
                changeHandler: (filter, preferCachedValue) => {
                    trigger(filter, preferCachedValue);
                    page.current = 1;
                },
            });
        }
    }, [filter, id])

    if (id < 0) return <div className={cl.blank}>Выберите филиал</div>
    if (result.isLoading) return <div className={cl.blank}>Loading...</div>
    if (result.error) return <div className={cl.blank}>Some error occurred</div>
    if (typeof result.data === "undefined") return <div className={cl.blank}>Something went wrong</div>

    return (
        <section className={cl.page}>
            <div className={cl.filter}>
                <Filter
                    filter={filter}
                    inputs={inputs}
                    dropdowns={dropdowns}
                    inputChangeHandler={changeHandler}
                    dropdownChangeHandler={changeHandler}
                />
            </div>
            <span className={cl.border}></span>
            <div className={cl.menus}>
                {result.data === null
                    ? <div className={cl.blank}>Ничего не найдено</div>
                    : result.isFetching
                        ? <div>Loading...</div>
                        : <MenuItems items={result.data.data} />
                }
            </div>
            {
                !result.data || result.data.max_pages === 1
                    ? null
                    : <div className={cl.pagination}>
                        <Pagination
                            totalPages={result.data.max_pages}
                            currentPage={page.current}
                            changePageHandler={(newPage) => pageChangeHandler(newPage)}
                        />
                    </div>
            }
        </section>
    );
};

export default MenuPage;