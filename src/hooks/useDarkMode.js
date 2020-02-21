import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react';


export const useDarkMode = (DarkMode) => {
    const [mode, setMode] = useLocalStorage('DarkMode');

    // const setModeValue =value => {
    //     setMode(value);
    // }

    useEffect(() => {
//    const rootElement = document.getElementById("root");

        if (mode === true) {
       document.body.classList.add('dark-mode');
        } else if (mode === false){
            document.body.classList.remove('dark-mode');
        }
}, [mode])
    
    return [mode, setMode];
}



