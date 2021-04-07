import React, {createContext, useState} from "react";
import {Questions} from "../data/Questions";
import Mercurio from "../img/Mercurio.svg";
import Jupyter from "../img/Jupyter.svg";
import Marte from "../img/Marte.svg";
import Neptuno from "../img/Neptuno.svg";
import Pluton from "../img/Pluton.svg";
import Saturno from "../img/Saturno.svg";
import Tierra from "../img/Tierra.svg";
import Urano from "../img/Urano.svg";
import Venus from "../img/Venus.svg";
const planets = [Mercurio, Venus, Tierra, Marte, Jupyter, Saturno, Urano, Neptuno, Pluton];
export const DataContext = createContext();
export const DataProvider = ( {children } ) => {
    const [DataQuestions, setDataQuestions] = useState(Questions);
    const [Planets, setPlanets] = useState(planets)
    return (
        <DataContext.Provider value = {{
            DataQuestions,
            Planets
        }}>
            { children }
        </DataContext.Provider>
    )  
}