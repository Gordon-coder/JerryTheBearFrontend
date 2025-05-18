import { useState, useEffect } from 'react'
import Navbar from './Navbar.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App() {
  const [merch, setMerch] = useState([])

  async function fetchMerch() {
    const response = await fetch('http://localhost:8000/api/merchandises/')
    const data = await response.json()
    setMerch(data)
  }

  useEffect(() => {
    fetchMerch()
  }, [])

  return (
    <>
      <Navbar />
      <div id="banner">
        <img src="assets/banner.png" alt="Jerry the Bear Banner"/>
      </div>
      <div id="about">
        <h1>About Jerry the Bear</h1>
        <p>Jerry is a cute, chubby bear whom everyone in 2D loves. Despite his tinyness, he has quite an adventurous heart.</p>
      </div>
      <div id="merch">
        <h1>Merchandise</h1>
        <div className="merch-container">
          {merch.map(item => (
            <div key={item.id} className="card merch-item" onClick={() => window.location.href = `/merchandises/${item.id}`}>
              <img src={item.image} alt={item.name} width={300} className='card-img-top'/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
