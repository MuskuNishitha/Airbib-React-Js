import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export const Navba = () => {
  return (
    <>
    
    <div id="navaba">
    <div id="btnscon">
{
    btncontent.map((ele,index)=>{
return <Btn  p1={ele.p1} p2={ele.p2} keys={index} />
    })
}

<div id="divtagsearch">
    <SearchIcon />
</div>
    </div>
    </div>
    
    </>
  )
}


let btncontent=[
    {
p1:"Where",
p2:"Search destinations"
    },
    {
        p1:"Check in",
        p2:"Add dates"
    },
    {
        p1:"Check out ",
        p2:"Add dates"
    },
    {
        p1:"Who",
        p2:"Add guests"
    }
]

let Btn=(props)=>{
    return(
        <>
        <div id="divtagp">
              <p id='ptagdow'>{props.p1} <br/>{props.p2} </p>
            
        </div>
        
        
        </>
    )
}