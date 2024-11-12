import React, { useContext } from 'react'
import { KosarContext } from './contexts/KosarContext'

function Termek(props) {
    const { kosarba } = useContext(KosarContext);

  return (
    <div className='card col-lg-3'>
        <div className="card-header">
            <h4 className="card-title">
                {props.elem.title}
            </h4>
        </div>
        <div className="card-body">
            <img src={props.elem.image} alt="" className='img-fluid' />
            <p className="card-text">
                {props.elem.description}
            </p>
        </div>
        <div className="card-footer row">
            <button className="btn btn-primary col-lg-6" onClick={() => {kosarba(props.elem)}}>
                Kosárba
            </button>
            <b className='col-lg-6'>
                {props.elem.price} €
            </b>
        </div>
    </div>
  )
}

export default Termek