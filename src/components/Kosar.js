import React, { useContext } from 'react'
import { KosarContext } from './contexts/KosarContext'

function Kosar() {
    const { kosarLista } = useContext(KosarContext);

  return (
    <>
        {
            kosarLista.map((elem, index) => {
                return (
                    <ul className='border-bottom row' key={index}>
                        <li className='col-lg-6 list-unstyled'>{elem.title}</li>
                        <li className='col-lg-6 list-unstyled'>{elem.price} €</li>
                    </ul> 
                )
            })
        }
    </>
  )
}

export default Kosar