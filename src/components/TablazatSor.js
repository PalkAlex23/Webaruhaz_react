import React, { useContext } from 'react'
import { ApiContext } from './contexts/ApiContext'

function TablazatSor(props) {
    const { deleteAdat } = useContext(ApiContext);

  return (
    <tr>
        <td>{props.elem.id}</td>
        <td><img src={props.elem.image} alt={props.elem.title} className='img-fluid'/></td>
        <td>{props.elem.title}</td>
        <td>{props.elem.description}</td>
        <td>{props.elem.price}</td>
        <td>{props.elem.category}</td>
        <td><button className='btn btn-warning'>Módosítás</button></td>
        <td><button className='btn btn-danger' onClick={() => {
            deleteAdat("/products", props.elem.id)
        }}>Tőrlés</button></td>
    </tr>
  )
}

export default TablazatSor