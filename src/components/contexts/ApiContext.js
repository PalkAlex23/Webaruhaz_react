import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({children}) => {
    const [termekLista, setTermekLista] = useState([]);
    const [katLista, setKatLista] = useState([]);

    /* Axios-szal aszinkron módon
        GET kérést indítunk a végpont felé */

    const getAdat = async (vegpont, callbackFv) => {
        try {
            const response = await myAxios.get(vegpont);
            // console.log("adat: ", response.data);
            callbackFv(response.data)
        } catch (err) {
            console.log("Hiba történt az adat elküldesékor", err)
        } finally {

        }
    };

    const postAdat = async (vegpont, adat) => {
        try {
            const response = await myAxios.post(vegpont, adat);
            console.log("adat: ", response.data);
        } catch (err) {
            console.log("Hiba történt az adat elküldesékor", err)
        } finally {

        }
    };

    const deleteAdat = async (vegpont, id) => {
        try {
            const response = await myAxios.delete(vegpont+"/"+id);
            console.log("adat: ", response.data);
        } catch (err) {
            console.log("Hiba történt az adat elküldesékor", err)
        } finally {

        }
    };
    /* useEffect hook segítségével hívjuk meg az aszinkron get kéréseket
    aszinkron hívások esetén nem végtelen sokszor fusson le a kérés, csak is akkor fusson le
    ha a függőség listában változás történik */
    useEffect(() => {
        getAdat("/products", setTermekLista);
        getAdat("/products/categories", setKatLista);
    }, [])

    return (

        <ApiContext.Provider value={{termekLista, katLista, postAdat, deleteAdat}}>
            {children}
        </ApiContext.Provider>
    );
}