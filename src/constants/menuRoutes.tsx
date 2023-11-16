import {IMenuRoute} from "../models/menuRoute";
import BlankPage from "../pages/BlankPage/BlankPage";
import MenuPage from "../pages/MenuPage/MenuPage";

export const menuRoutes: IMenuRoute[] = [
    {
        id: 0,
        name: "Компоненты",
        path: "blank",
        element: <BlankPage />,
    },
    {
        id: 1,
        name: "Полуфабрикаты",
        path: "blank",
        element: <BlankPage />,
    },
    {
        id: 2,
        name: "Товары",
        path: "blank",
        element: <BlankPage />,
    },
    {
        id: 3,
        name: "Меню",
        path: "menu",
        element: <MenuPage />,
    },
    {
        id: 4,
        name: "Перемещения",
        path: "blank",
        element: <BlankPage />,
    },
    {
        id: 5,
        name: "Инвентаризация",
        path: "blank",
        element: <BlankPage />,
    },
    {
        id: 6,
        name: "Выпуск товара",
        path: "blank",
        element: <BlankPage />,
    },
    {
        id: 7,
        name: "Списание",
        path: "blank",
        element: <BlankPage />,
    },
    {
        id: 8,
        name: "Накладные",
        path: "blank",
        element: <BlankPage />,
    }
]