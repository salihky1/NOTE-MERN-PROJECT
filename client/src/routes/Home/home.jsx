import React from 'react'
import Notes from '../../components/Notes'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='d-flex justify-content-between'>
      <h1>NOTLARIM</h1>
    <Link to={"/add-note"} className='fs-3 '>Yeni not ekle +</Link>
      </div>
  
   
   <Notes/>

    </div>)
}

export default Home