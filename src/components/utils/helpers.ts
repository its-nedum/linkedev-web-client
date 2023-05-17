const getItem = (itemName: string) =>
window.localStorage.getItem(itemName);

const setItem = (itemName: string, itemValue: any) =>
window.localStorage.setItem(itemName, itemValue);

const removeItem = (itemName: string) =>
window.localStorage.removeItem(itemName);

const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export {
    getItem,
    setItem,
    removeItem,
    emailRegex
}