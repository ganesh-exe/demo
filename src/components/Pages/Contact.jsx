import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate()
  const alertmsg=()=>{
    alert("Data Saved !")
  }
  const navigateTo=()=>{
    setTimeout(alertmsg,50);
    navigate('/')
  }
  return (
    <>
    <div className='container text-center mt-5'>
        <h1>Contact form</h1>
    </div>
      <div className="container">
        <form className="mt-5">
          <div className="form-group mt-3">
            <label>First Name</label>
            <input type="text" className="form-control mt-2" id="exampleFormControlInput1" placeholder="name"></input>
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input type="text" className="form-control mt-2" id="exampleFormControlInput1" placeholder="name"></input>
          </div>
          <div className="form-group mt-3">
            <label>Mail id</label>
            <input type="text" className="form-control mt-2" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>
          <div className="form-group mt-3">
            <label>Country</label>
              <select className="form-control" id="exampleFormControlSelect1">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Other</option>
              </select>
          </div>
          <div className="form-group mt-3">
            <label>Query</label>
            <input type="text" className="form-control mt-2" id="exampleFormControlInput1" placeholder="Write something"></input>
          </div>
          <button className='btn btn-primary mt-3' onClick={navigateTo} > Submit details</button>
        </form>
      </div>
      </>
  
  )
}

export default Contact