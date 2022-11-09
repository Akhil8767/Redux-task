import React,{useState} from 'react'
import { regis } from '../action/index'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [pass,setPass]=useState("")

  const [testEmail,setTestEmail]=useState('')

 const dispatch=useDispatch()

  const data= {name,email,phone,pass}
  

  const navigate=useNavigate()

  const dataHandler=(e)=>{  

    e.preventDefault();
    dispatch(regis(data))
    navigate("/home")

    const regEm= /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

    if(regEm.test(email)){
      setTestEmail("")
    } else if (!regEm.test(email) && email !== ""){
      setTestEmail("invalid gmail")
    } else{
      setTestEmail("")
    }
   
  }
  return (
    <div className='Regis'>
      <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <p>{testEmail}</p>
      <input type="tel" placeholder='Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      <input type="password" placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <button onClick={dataHandler}>Registar</button>
    </div>
  )
}

export default Registration