import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {

  const [phone,setPhone]=useState("")
  const [pass,setPass]=useState("")

  const getData=useSelector((state)=>state.dataReducer.list);
  console.log(getData[0]?.data)

  const navigate=useNavigate()

  const loggedFunc=(e)=>{
     e.preventDefault()
     
     if(phone===getData[0]?.data?.phone && pass === getData[0]?.data?.pass){
        localStorage.setItem("Loggin",true)
        navigate("/home")
     }else{
        alert("wrong details")
     }
  }
  return (
    <div className='Regis'>
      <input type="tel" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      <input type="password" placeholder='password'  value={pass} onChange={(e)=>setPass(e.target.value)} />
      <button onClick={loggedFunc}>Login</button>
    </div>
  )
}

export default Login