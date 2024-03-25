import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'
export const Footer = () => {
  return (
<>
<div id="enterfooter">
<div>
    <br/>
    <h1>Inspiration for future getaways</h1>
<div id="firstroew">
{pfirst.map((ele)=>{
   return <P  p={ele}></P>
})}
</div>
<hr/>
<br /><br/>
</div>

<div id="paracontent">
{pandcontent.map((ele,index)=>{
    return <PandAndContent p1={ele.p1} p2={ele.p2}  keys={index}/>

})}
</div>


<div id="innderv">
    <div>
        <h5>Support</h5>
        {
          support.map((ele,index)=>{
            return <P p={ele} keys={index} />

          })  
        }
    </div>
    <div>
        <h5>Hosting</h5>
        {
          hosting.map((ele,index)=>{
            return <P p={ele} keys={index} />

          })  
        }
    </div>
    <div>
        <h5>Airbnb</h5>
        {
          airbnb.map((ele,index)=>{
            return <P p={ele} keys={index} />

          })  
        }
    </div>
    
</div>

<hr/>
<div id="lastdiv">
    <div><p>
        &copy;2024 Airbib,inc . Privacy .term .Sitemap .company details
    </p></div>
    <div>
<LanguageIcon /> English (IN) &nbsp;&nbsp; INR <FacebookIcon/> <InstagramIcon /> <TwitterIcon />
    </div>
</div>

</div>

</>
  )
}
let support =["helop centre","AirCover","Anti-discrimination","Disability Suppport","cancellation option","Report neightbourts concern"]
let hosting=["airbnb you home" ,"Air cover for Hosts" ,"Hosting resoures","Community forum","Hosting responsibly","join a free hosting class"]
let airbnb=["Newroo," ,"Newfeture","Careers","Investors","Airbnb.org emergency stays"]
let pandcontent=[
    {
        p1:"Canmore",
    p2:"Chalet rentals"
    },
    {
        p1:"Benalamadena",
    p2:"Holiday rentals"
    },

    {
        p1:"Marbella",
    p2:"Beachfornt rentals"
    },

    {
        p1:"Mijas",
    p2:"Holiday rentals"
    },

    {
        p1:"Prescott",
    p2:"Pet-frinednly rentals"
    },

    {
        p1:"Mijas",
    p2:"Holiday rentals"
    },

    {
        p1:"Prescott",
    p2:"per-friendly rentals"
    },

    {
        p1:"Scottsdale",
    p2:"Mansion rentals"
    },

    {
        p1:"Tucson",
    p2:"Rentals with pool"
    },

    {
        p1:"Jasper",
    p2:"Holiday rentals"
    },

    {
        p1:"Mountain View",
    p2:"House rentals"
    },

    {
        p1:"Devonport",
    p2:"Holiday rentals"
    },

    {
        p1:"Mallacoota",
    p2:"Beach house rentals"
    },

    {
        p1:"Montery",
    p2:"Holidya rentals"
    },

    {
        p1:"Paso robles",
    p2:"Cottoge rentals"
    },

    {
        p1:"Santa Barbara",
    p2:"Flat rental"
    },

    {
        p1:"Sonoma",
    p2:"Rentals with pools"
    },
    {
        p1:"Benalamadena",
    p2:"Holiday rentals"
    },


]




let PandAndContent=(props)=>{
    return(
        <div>
            <p id="p1bold">{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    )
}

let pfirst=["population", "Arts &Culture" ,"Outdoors","Mountains","Beanch","Unique Stays" ,"categories","Things to do"]

let P=(props)=>{
    return(
        <>
        <p>{props.p}</p>
        </>
    )
}