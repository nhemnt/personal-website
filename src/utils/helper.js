const isSSR = typeof window !== undefined;
export const getItem = (item) => {
    if(isSSR){
        return window.localStorage.getItem(item);
    }
}


export const setItem = (name, value) => {
    if(isSSR){
        window.localStorage.setItem(name, value);
    }
}