import React, { useState, useEffect, } from "react"
 function NewClock (){
 const [time, setTime]= useState(new Date().toLocaleTimeString())
 useEffect(()=>{
    const timeId = setInterval(getTime,1000)
    return()=>{
        clearInterval(timeId)
    }
 },[])
 function getTime (){
    setTime(new Date().toLocaleTimeString())
 }
 return (
    <div className="newClock">
       
        <h1>{time}</h1>
    </div>
 )
 }
export default NewClock
