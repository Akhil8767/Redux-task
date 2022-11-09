import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {
   
    
    const navigate=useNavigate()

    const getData=useSelector((state)=>state.dataReducer.list);
  console.log(getData,getData[0]?.data?.name)


    const logoutFunc=()=>{
        localStorage.removeItem("Loggin")
        navigate('/login')
    }
  return (
     <div>
          <h1>User details</h1>
          <p>Name : {getData[0]?.data?.name}</p>
          <p>Email : {getData[0]?.data?.email}</p>
          <p>Phone : {getData[0]?.data?.phone}</p>
          <button onClick={logoutFunc}>Logout</button>
     </div>
    )
}

export default Home