import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate()
  const navigateTo=()=>{
    navigate('/')
  }
  return (
    <div className="container">
    <form action="" className='form-group'>
  
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
  
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
  
      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="australia">India</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
  
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
  
      <button className='btn btn-primary' type="submit" value="Submit" onClick={navigateTo}> Submit</button>
  
    </form>
  </div>
  
  )
}

export default Contact