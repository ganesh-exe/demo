import React from 'react'
import axios from 'axios'

const Forum = () => {
    let count=0;
    let posts=[{}]
    axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
    posts=resp.data;
    posts.map((item)=>{
        //console.log(item.title)
        console.log(item.id);
        console.log(item.title);
        console.log(item.body);
    })
    });
  return (
      <div className='text-center container'>
          <h3>Forum</h3>
          <table className="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead> 
  <tbody>
  {
      posts.map((item)=>{
      console.log(item.title)
      count=count+1
      return (
          <>
        <tr>
          <th scope="row">{count}</th>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
        </tr>
        </>
     )
  })
  }
  </tbody>
 </table>
      </div>
    
  )
}

export default Forum