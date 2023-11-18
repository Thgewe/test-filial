import React, {useEffect, useState} from 'react';
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
    page: number,
    trigger: (filter: IMenusRequestBody, preferCachedValue: boolean) => void
}>((obj) => {
    if (obj) {
        obj.trigger({
            filialId: obj.filialId,
            params: {
                limit: 3,
                page: obj.page,
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
    const [page, setPage] = useState<number>(1);
    const {id} = useAppSelector(state => state.filialReducer);

    const changeHandler = (name: string, value: IOption | string) => {
        setFilter({
            ...filter,
            [name]: value,
        })
    }

    const [trigger, result] = filialAPI.endpoints.getMenuByFilialId.useLazyQuery();

    useEffect(() => {
        debouncedDelayChange({
            filialId: id,
            page,
            menu: filter,
            trigger,
        });
    }, [filter, id])
    useEffect(() => {
        trigger({
            filialId: id,
            params: {
                limit: 3,
                page: page,
                active: filter.isActive.id === 1 ? "active" : "no_active",
                name: filter.menu,
                filial: filter.filial,
                tt: filter.store
            }
        }, true)
    }, [page])

    if (result.isLoading) return <div>Loading...</div>
    if (result.error) return <div>Some error occurred</div>
    if (typeof result.data === "undefined") return <div>Something went wrong</div>

    return (
        <div className={cl.page}>
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
                    ? <div>Ничего не найдено</div>
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
                            currentPage={page}
                            changePageHandler={(newPage) => setPage(newPage)}
                        />
                    </div>
            }
        </div>
    );
};

export default MenuPage;