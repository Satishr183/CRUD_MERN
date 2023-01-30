import React, { useState, useEffect } from 'react'
import axios from "axios"
function Items() {

    const [green,setGreen] = useState([])
    const [option,setOption] = useState([])

    useEffect(()=>{
        const get = async()=>{
        let respone = await axios.get("http://localhost:5000/api/getAllGreen")
        // console.log(respone.data)
        setGreen(respone.data.data)
        }

        get()
      
    },[])
console.log(green)
    
  return (
    <>
    <select style={{marginTop:"20px"}} onChange={(e)=>setOption(e.target.value)}>
        {
            green.map((opt,i)=><option key={i}>{opt.name}</option>)
        }
    </select>

    <div style={{width:"200px",height:"55px",border:"2px solid grey",display:"flex",flexDirection:"column",margin:"10px auto"}}>
        <p>{option}</p>
        <button>Add</button>

    </div>
    </>
  )
}

export default Items