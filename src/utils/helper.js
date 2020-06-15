export const getItem = (item) => {
    if(typeof window !== undefined){
        return localStorage.getItem(item);
    }
}


export const setItem = (name, value) => {
    if(typeof window !== undefined){
        localStorage.setItem(name, value);
    }
}