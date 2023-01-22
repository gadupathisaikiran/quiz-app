import React, { useEffect, useState } from 'react'
import Quiz from './quiz'

export default function Fetch() {

  const [data,setdata]=useState([])

  const [index,setindex]=useState(1)





  function nextqus(){

   
    setindex(index+1)
 
  }





  useEffect(()=>{

      fetch("https://opentdb.com/api.php?amount=5").then(res=>res.json()).then(d=> setdata(d.results)).catch((err)=>console.log(err))




  },[])





 return (
    <div>
    {data[0]?

      <Quiz data={data[index-1]} length={data.length} nextqus={nextqus} index={index}/> 
    
    :""}


    
    
    
    </div>
  )
}
