import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Navbar from './Navbar.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function Merch() {
  const { id } = useParams<{ id: string }>()
  const [merch, setMerch] = useState({})
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState("")

  async function fetchMerch() {
      const response = await fetch('http://localhost:8000/api/merchandises/')
      const data = await response.json()
      setMerch(data.find(item => item.id == id))
    }
  
    useEffect(() => {
      fetchMerch()
    }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch(`http://localhost:8000/api/order/?${new URLSearchParams(formData)}`, {
      method: 'GET'
    });
    setError(await response.text());
  }

  return (
    <>
      <Navbar />
      <div className="showroom">
        <img src={merch.image} alt={merch.name} className='merch-img'/>
        <div className="merch-info">
          <h1>{merch.name}</h1>
          <hr />
          <h4 className="price">${merch.price}</h4>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="hidden" id="merch_id" value={id} name="merch_id" />
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name"/>
          <label htmlFor="name" className="form-label">Name: </label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" name="phone"/>
          <label htmlFor="phone" className="form-label">Phone number: </label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="amount" placeholder="Enter amount" onChange={(e) => setAmount(Number(e.target.value))} name="amount"/>
          <label htmlFor="amount" className="form-label">Amount: </label>
        </div>
        <div className="d-flex justify-content-between">
          <div>Current Price: ${merch.price * amount}</div>
          <input type="submit" className="btn btn-primary" value="Send" />
        </div>
      </form>
      <div className="response">
        {error}
      </div>
    </>
  );
}

export default Merch