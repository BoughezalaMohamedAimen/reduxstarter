import React ,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';


function Counter ()  {
  const dispatch=useDispatch()
    useEffect(()=>{ //component did mount
      console.log("component did mount ");
      return ()=>{ //component  unmount
        console.log("component did unmount ");
      }
    },[])
    return(
      <React.Fragment>
      <h1> {useSelector(state => state.counter[0].counter)} </h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}> - </button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}> - </button>
      </React.Fragment>
      )
}

export default Counter ;
