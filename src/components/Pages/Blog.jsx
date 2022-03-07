import React, { useState } from 'react'

const Blog = () => {
  const [title, settitle] = useState("")
  
  return (
    <>
    <div className='container text-center mt-5'>
        <h1>Create Blog</h1>
    </div>
      <div className="container">
        <form className="mt-5">
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={title}></input>
          </div>
          <div className="form-group">
            <label>Category</label>
              <select className="form-control" id="exampleFormControlSelect1">
              <option>Angular</option>
              <option>ReactJS</option>
              <option>NodeJS</option>
              <option>MongoDB</option>
              </select>
          </div>
          <div className="form-group">
             <label>Content</label>
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Blog