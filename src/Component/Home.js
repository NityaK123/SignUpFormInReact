import {React,useState} from 'react';
import { addName } from '../Feature/slice';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

export const Home = () => {

    const value=useSelector(state=>state.data);
    console.log(value);
    const dispatch=useDispatch();

  return (
    <>
       <div style={{padding:"20px", margin:"10px"}}>
        <Link to="/">Home</Link>
        <br/> <br/>
        <Link to="about">About</Link>
        <br/> <br/>
        <Link to="signup">Sign Up</Link>
        <h1>Home</h1>
        <input type="text"  placeholder="Enter Text" onChange={(e)=>{const val=e.target.value; dispatch(addName(val))}} />
        {value.map((v)=>(<li key={v.id}>{v.name}</li>))}
        </div>
    </>
  )
}