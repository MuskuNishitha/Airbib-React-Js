import React, { useState } from 'react'
import icon from './images/icon.png'
import { Button } from './Button'
import LanguageIcon from '@mui/icons-material/Language';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Buttondiv } from './Buttondiv';
export const Navbar = () => {
  let [state,setState]=useState(false)
  let handle=()=>{
let twoicon=document.getElementsByClassName("twoicon")[0]
console.log(twoicon);
setState(!state)
  }
  return (
    <>
    <div id="maiindiv">

    <div>
        <img src={icon} alt='error' id="icon"></img>
    </div>
    <div id="btnall">
        {btns.map((ele,index)=>{
       return     <Button btn={ele} keys={index} />

        })}
    </div>
    <div id="innerdiv">
    <div > 
        <Button btn="Airbib your home" /></div>
        <div id="notmal"><LanguageIcon/></div>
        <div className='twoicon' onClick={handle}>
   {/* <buttton className="twoicon"> */}
<ViewHeadlineIcon/>
<AccountCircleIcon/>
            {/* </buttton> */}
        </div>
    </div>




    </div>
{
  state ?<Buttondiv /> :''
}

</>
  )
}

let btns=["Stays", "Experience","OnlineExpeirebnce"]