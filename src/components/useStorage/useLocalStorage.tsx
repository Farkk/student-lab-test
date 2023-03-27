import { useState, useEffect } from "react";
export const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(defaultValue);

    const changeValue = (value:any) => {        
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    } 
	
    useEffect(() => {
        const stored = localStorage.getItem(key);

        if (!stored) {
            setValue(defaultValue);
            localStorage.setItem(key, JSON.stringify(defaultValue));
        } else {
            setValue(JSON.parse(stored));
        }
    }, [defaultValue, key]);

    return [value, changeValue]
}