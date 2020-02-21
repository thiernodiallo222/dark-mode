import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react';


export const useDarkMode = (DarkMode) => {
    const [mode, setMode] = useLocalStorage(DarkMode);

    const setModeValue =value => {
        setMode(value);
    }

    useEffect(() => {
   const rootElement = document.getElementById("root");

        if (DarkMode) {
       rootElement.classList.add('dark-mode');
        } else {
            rootElement.classList.remove('dark-mode');
        }
}, [])
    
    return [mode, setModeValue];
}



