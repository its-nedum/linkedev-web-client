const getItem = (itemName: string) =>
window.localStorage.getItem(itemName);

const setItem = (itemName: string, itemValue: any) =>
window.localStorage.setItem(itemName, itemValue);

const removeItem = (itemName: string) =>
window.localStorage.removeItem(itemName);

export {
    getItem,
    setItem,
    removeItem,
}