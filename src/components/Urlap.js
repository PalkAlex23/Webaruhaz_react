import React, { useContext, useState } from "react";
import { ApiContext } from "./contexts/ApiContext";

function Urlap() {
    const { postAdat, katLista } = useContext(ApiContext)

    /* saját belső state */
    const [adat, setAdat] = useState(
        {
            title: '..asd.',
            price: '1000',
            category: '...',
            description: '...',
            image: '...'
        }
    );

    function adatKuld(event) {
        event.preventDefault()
        /* összegyűjtjük az űrlap input mezőiből az adatokat
        összeállítunk egy objektumot
        És post kéréssel elküldjük a megfelelő végpontra */
        console.log("küldés", adat)
        /* validálás után - formai ellenőrzés */
        postAdat("/products", adat)
    }

    function valtozasKezeles(event) {
        /* itt frissítem a stat értékét */
        const sv = {...adat}
        sv[event.target.id] = event.target.value
        setAdat({...sv})
    }

  return (
    <form onSubmit={adatKuld}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label"> Termék neve </label>
        <input type="text" pattern="^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]{2,}$" value={adat.title} onChange={valtozasKezeles} className="form-control" id="title" aria-describedby="emailHelp" />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label"> Termék ára </label>
        <input type="number" min={1000} max={10000} value={adat.price} onChange={valtozasKezeles} className="form-control" id="price" aria-describedby="emailHelp" />
      </div>

      <div className="form-floating mb-3">
        <textarea className="form-control" placeholder="Egy Louis Vuitton póló" id="description"></textarea>
        <label htmlFor="description">Termék leírása</label>
    </div>
    
    <select className="form-select mb-3" aria-label="Default select example">
        <option>Open this select menu</option>
        {/* <option value="1">One</option> */}
        <>
            {
                katLista.map((elem, index) => {
                    return (
                        <option value={index+1} key={index}>{elem}</option>
                    )
                })
            }
        </>
    </select>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Urlap;
