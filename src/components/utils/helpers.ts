const getItem = (itemName: string) =>
window.localStorage.getItem(itemName);

const setItem = (itemName: string, itemValue: any) =>
window.localStorage.setItem(itemName, itemValue);

const removeItem = (itemName: string) =>
window.localStorage.removeItem(itemName);

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export {
    getItem,
    setItem,
    removeItem,
    emailRegex
}