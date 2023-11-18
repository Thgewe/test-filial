export const options = [
    {
        name: "Активно",
        id: 1,
    },
    {
        name: "Не активно",
        id: 2,
    }
];

export const dropdowns = [
    {
        options,
        name: "isActive",
        order: 4,
    },
];
export const inputs = [
    {
        name: "menu",
        order: 1,
        placeholder: "Название меню",
    },
    {
        name: "filial",
        order: 2,
        placeholder: "Филиал",
    },
    {
        name: "store",
        order: 3,
        placeholder: "Торговая точка",
    },
    {
        name: "export",
        order: 5,
        readonly: true,
        placeholder: "Экспорт",
    },
];