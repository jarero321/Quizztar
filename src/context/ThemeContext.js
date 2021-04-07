import React, {createContext, useState} from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ( {children } ) => {
    const [ThemePlanet, setThemePlanet] = useState("Default");
    return (
        <ThemeContext.Provider value = {{
            ThemePlanet,
            setThemePlanet
        }}>
            { children }
        </ThemeContext.Provider>
    )  
}