import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems) => {
    console.log("MENU ITEMS BEFORE MAP", menuItems);
    const mappedMenuItems = menuItems.map(menuItem => {
        console.log("ITEMS", menuItem.items)
        return {
        id: uuid(),
        destination: menuItem.menuItem.destination?.uri,
        label: menuItem.menuItem.label,
        subMenuItems: (menuItem.items || []).map((subMenuItem) => (
            {
            id: uuid(),
            destination: subMenuItem.destination?.uri,
            label: subMenuItem.label
        }))
    }});

    console.log("MAPPED MENU ITEMS", mappedMenuItems);
    return mappedMenuItems;
}