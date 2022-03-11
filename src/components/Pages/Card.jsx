import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddLike } from '../../Actions/actions'
import './Card.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Card = (props) => {
  console.log(props.card.Blogtitle)
    const [likes, setlikes] = useState(0)
    const dispatch=useDispatch();
    const handler=()=>{
       
        dispatch(AddLike(props.card.Id));
        setlikes(likes+1);
        
  }

  return (
    <div className="col-md-6 col-lg-4">
<div className="card my-3 h-100">
    <div class="card-thumbnail">
        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" className="img-fluid" alt="thumbnail" />
    </div>
    <div className="card-body">
    <p className="card-subtitle mb-2 text-muted">POSTED BY {props.card.Author} | {props.card.Date}</p>
    <h4 className="card-title">{props.card.Blogtitle}</h4>
    <p>{props.card.Content}</p>
        <div className="d-flex flex-row bd-highlight mb-3">
        <button onClick={handler} className="btn border bg-primary bg-opacity-70 text-white ">&emsp;
        <ThumbUpOffAltIcon></ThumbUpOffAltIcon>{props.card.Likes}</button>
        </div>
 </div>
</div>
</div>
  )
}

export default Card