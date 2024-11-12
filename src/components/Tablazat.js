import React, { useContext } from 'react'
import TablazatSor from './TablazatSor'
import { ApiContext } from './contexts/ApiContext'

function Tablazat() {
    const {termekLista} = useContext(ApiContext)
    return (
        <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>kép</th>
                <th>cím</th>
                <th>leírás</th>
                <th>ár</th>
                <th>kategória</th>
                <th>Módosítás</th>
                <th>Tőrlés</th>
            </tr>
        </thead>
        <tbody>
        <>
            {
                termekLista.map((elem, index) => {
                    return <TablazatSor elem={elem} key={index} index={index} />
                })
            };
        </>
        </tbody>
        </table>
    )
}

export default Tablazat