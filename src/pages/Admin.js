import React from 'react'
import Tablazat from '../components/Tablazat'
import Urlap from '../components/Urlap'

function Admin() {
  return (
    <main className='row'>
        <Urlap />
        <br />
        <article className="col-lg-12">
          <h3>Táblázat</h3>{" "}
          <Tablazat />
        </article>
      </main>
  )
}

export default Admin