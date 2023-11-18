import {IMenu, IMenuItemValue} from "../models/menu";

export const getMenuItemValues = (menu: IMenu) => {
    const arr: IMenuItemValue[] = [];
    let prop: keyof typeof menu;

    for (prop in menu) {
        switch (prop) {
            case "name":
                arr.push({
                    flexGrow: "var(--filter-input-flex-grow)",
                    flexBasis: "var(--filter-input-flex-basis)",
                    value: menu[prop],
                });
                break;
            case "filial":
                arr.push({
                    flexGrow: "var(--filter-input-flex-grow)",
                    flexBasis: "var(--filter-input-flex-basis)",
                    value: menu[prop].name,
                });
                break;
            case "tt":
                arr.push({
                    flexGrow: "var(--filter-input-flex-grow)",
                    flexBasis: "var(--filter-input-flex-basis)",
                    value: menu[prop].name,
                });
                break;
            case "active":
                arr.push({
                    flexGrow: "var(--filter-dropdown-flex-grow)",
                    flexBasis: "var(--filter-dropdown-flex-basis)",
                    value: menu[prop] ? "Активно" : "Не активно",
                });
                break;
            case "export":
                arr.push({
                    flexGrow: "var(--filter-input-flex-grow)",
                    flexBasis: "var(--filter-input-flex-basis)",
                    value: menu[prop],
                });
                break;
        }
    }
    return arr;
}
