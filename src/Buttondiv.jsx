import React from 'react'

export const Buttondiv = () => {
  return (
   <>
   
   <div  id="divtagbtn">
<div>
{p.map((ele ,i)=>{
    return <P  p={ele}keys={i}></P>
})}  
</div>
   </div>
   
   </>
  )
}

let p=["Sing up", "log in" ," Airbib is your home","Help center"]
let P=(props)=>{
    return(
        <>
        <p>{props.p}</p>
        
        </>
    )
}