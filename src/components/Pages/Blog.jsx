import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddEntry } from '../../Actions/actions'
import './Blog.css'
// import {Home} from './Home';

const Blog = () => {
  // const [blog,setBlog]=useState([
  //   {
  //     title:"",
  //     author:"",
  //     date:Date.now(),
  //     category:"",
  //     content:""
  //   }
  // ])
  const [title, settitle] = useState("");
  const [author, setAuthor] = useState("");
  const date= new Date().toDateString();
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [count, setcount] = useState(0);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const navigateTo=()=>{
    dispatch(AddEntry({
      Blogtitle:title,
      Id:count,
      Likes:0,
      Date:date,
      Content:content,
      Category:category,
      Author:author
    }));
    setcount(count+1)
    settitle("")
    setAuthor("")
    setCategory("")
    setContent("")
    //console.log()
    navigate('/')
  };
  
  return (
    <>
      <div className="container" id='main'>
      <div className='text-center mt-3'>
        <h2>Create Blog</h2>
      </div>
        <form className="mt-5">
          <div className="form-group">
            <label className='mt-2'>Post Title</label>
            <input type="text" className="form-control mt-2" placeholder="Title" value={title} onChange={(e)=>settitle(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label className='mt-2'>Post Author</label>
            <input type="text" className="form-control mt-2" placeholder="author" value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
          </div>
          <div className="form-group">
          </div>
          <div className="form-group">
            <label className='mt-2'>Post Category</label>
            <input type="text" className="form-control mt-2" placeholder="category" value={category} onChange={(e)=>setCategory(e.target.value)}></input>
          </div>
          <div className="form-group">
             <label className='mt-2'>Post Content</label>
             <textarea className="form-control mt-2" rows="3" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
          </div>
          <div className='text-center'> <button type='button' className='btn btn-info mt-3 text-white' onClick={navigateTo} > Submit</button> </div>
          
        </form>
      </div>
    </>
  )
}

export default Blog