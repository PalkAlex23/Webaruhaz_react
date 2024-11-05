import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({children}) => {
    const [termekLista, setTermekLista] = useState([]);

    /* Axios-szal aszinkron módon
        GET kérést indítunk a végpont felé */

    const getAdat = async (vegpont) => {
        try {
            const response = await myAxios.get(vegpont);
            // console.log("adat: ", response.data);
            setTermekLista(response.data)
        } catch (err) {
            console.log("Hiba történt az adat elküldesékor", err)
        } finally {

        }
    };
    /* useEffect hook segítségével hívjuk meg az aszinkron get kéréseket
    aszinkron hívások esetén nem végtelen sokszor fusson le a kérés, csak is akkor fusson le
    ha a függőség listában változás történik */
    useEffect(() => {
        getAdat("/products");
    }, [])

    return (

        <ApiContext.Provider value={{termekLista}}>
            {children}
        </ApiContext.Provider>
    );
}