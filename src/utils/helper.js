const isSSR = typeof window !== undefined;
export const getItem = (item) => {
    if(isSSR){
        return localStorage.getItem(item);
    }
}


export const setItem = (name, value) => {
    if(isSSR){
        localStorage.setItem(name, value);
    }
}