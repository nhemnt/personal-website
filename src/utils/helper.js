export const getItem = (item) => {
    if(window){
        return window.localStorage.getItem(item);
    }
}


export const setItem = (name, value) => {
    if(window){
        window.localStorage.setItem(name, value);
    }
}