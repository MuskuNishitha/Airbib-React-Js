import React from 'react';
import img1 from './images/cardimages/img1.webp'
import img2 from './images/cardimages/img2.webp'
import img3 from './images/cardimages/img3.webp'
import img4 from './images/cardimages/img4.webp'
import img5 from './images/cardimages/img5.webp'
import img6 from './images/cardimages/img6.webp'
import img7 from './images/cardimages/img7.webp'
import img8 from './images/cardimages/img8.webp'
import img9 from './images/cardimages/img9.webp'
import img10 from './images/cardimages/img10.webp'
import img11 from './images/cardimages/img11.webp'
import img12 from './images/cardimages/img12.webp'
import img13 from './images/cardimages/img2.1.webp'
import img14 from './images/cardimages/img2.12.webp'
import img15 from './images/cardimages/img2.3.webp'
import img16 from './images/cardimages/img2.4.webp'
import img17 from './images/cardimages/img2.5.webp'
import img18 from './images/cardimages/img2.6.webp'
import img19 from './images/cardimages/img2.7.webp'
import img20 from './images/cardimages/img2.8.webp'
import img21 from './images/cardimages/img2.9.webp'
import img22 from './images/cardimages/img2.10.webp'
import img23 from './images/cardimages/img2.11.webp'
import img24 from './images/cardimages/img2.12.webp'
import img25 from './images/cardimages/img9.webp'
import img26 from './images/cardimages/img10.webp'
import img27 from './images/cardimages/img11.webp'
import img28 from './images/cardimages/img12.webp'
import img29 from './images/cardimages/img2.1.webp'
import img30 from './images/cardimages/img2.12.webp'
import img31 from './images/cardimages/img2.3.webp'
import img32 from './images/cardimages/img2.4.webp'
import img33 from './images/cardimages/img2.5.webp'
import { Card } from './Card';
import { Footer } from './Footer';
export const Home = () => {
  return (
    <>
    <div>
    <div id="homec">
<div id="flexitems">
{
    cardConent.map((ele)=>{
        let {img1,img2,img3,h1,p,p1,h2,p2}=ele
        return <Card img1={img1} img2={img2} p={p} p1={p1} h2={h2} img3={img3}  h1={h1} p2={p2}/>
    })
}
</div>
</div>
    </div>

<div id="footerhome">
<Footer />
</div>
    
    
    </>


  )
}
let cardConent=[

{
img1: img1,
img2: img2,
img3:img3 ,
h1: "Landon,UK" ,
p:"STAY WITH AMELIA .hosting fro 6 years" ,
p1:"23-28 Mar",
h2:"6,024",
 p2:"night"

 },
{
    img1: img4,
    img2:img5 ,
    img3: img6,
    h1: "Turin,Italy" ,
    p:"Stay with Carmela . Hosting for 8 years" ,
    p1:"8-13 Apr",
    h2:"4,686",
     p2:"night"
    
},
{
    img1:img7 ,
    img2: img8,
    img3:img9 ,
    h1: "Nantees,France" ,
    p:"Stay with Golwen" ,
    p1:"23-28 mar",
    h2:"7,416",
     p2:"night"
},
{
    img1: img10,
    img2:img11 ,
    img3: img12,
    h1: "Milan, Italy" ,
    p:"Stay with Valentia . Interiro designer" ,
    p1:"19=8-23 Mar",
    h2:"8,291",
     p2:"night"
},

{
    img1: img13,
    img2: img14,
    img3: img15,
    h1: "Lyon ,France" ,
    p:"Stay with Edouard . Coach ,erp trainer" ,
    p1:"6-11 Apr",
    h2:"6,695",
     p2:"night"
},
{

    img1:img16 ,
    img2: img17,
    img3: img18,
    h1: "Lyon ,France" ,
    p:"Stay with Zoe .Marketing" ,
    p1:"1-6 Aug",
    h2:"11,845",
     p2:"night"
},
{
    img1:img19 ,
    img2:img20 ,
    img3: img21,
    h1: "Malakoff ,France" ,
    p:"Stay with Jacques- Oilvier .Ssii manager" ,
    p1:"22-27 Mar",
    h2:"6,180",
     p2:"night"
    
},
{
    img1:img22 ,
    img2: img23,
    img3:img24 ,
    h1: "Palerno ,Italy" ,
    p:"Stay with Gabdlfo Gabriele .Artist" ,
    p1:"18-23 Mar",
    h2:"6,746",
     p2:"night"
    
},
{
    img1: img25,
    img2:img26 ,
    img3: img27,
    h1: "Milan, Italy" ,
    p:"Stay with Valentia . Interiro designer" ,
    p1:"19=8-23 Mar",
    h2:"8,291",
     p2:"night"
},

{
    img1: img28,
    img2: img29,
    img3: img30,
    h1: "Lyon ,France" ,
    p:"Stay with Edouard . Coach ,erp trainer" ,
    p1:"6-11 Apr",
    h2:"6,695",
     p2:"night"
},
{

    img1:img31 ,
    img2: img32,
    img3: img33,
    h1: "Lyon ,France" ,
    p:"Stay with Zoe .Marketing" ,
    p1:"1-6 Aug",
    h2:"11,845",
     p2:"night"
},
{
    img1:img19 ,
    img2:img20 ,
    img3: img21,
    h1: "Malakoff ,France" ,
    p:"Stay with Jacques- Oilvier .Ssii manager" ,
    p1:"22-27 Mar",
    h2:"6,180",
     p2:"night"
    
},
{
    img1:img7 ,
    img2: img8,
    img3:img9 ,
    h1: "Nantees,France" ,
    p:"Stay with Golwen" ,
    p1:"23-28 mar",
    h2:"7,416",
     p2:"night"
},
{
    img1: img10,
    img2:img11 ,
    img3: img12,
    h1: "Milan, Italy" ,
    p:"Stay with Valentia . Interiro designer" ,
    p1:"19=8-23 Mar",
    h2:"8,291",
     p2:"night"
},

{
    img1: img13,
    img2: img14,
    img3: img15,
    h1: "Lyon ,France" ,
    p:"Stay with Edouard . Coach ,erp trainer" ,
    p1:"6-11 Apr",
    h2:"6,695",
     p2:"night"
},
{

    img1:img16 ,
    img2: img17,
    img3: img18,
    h1: "Lyon ,France" ,
    p:"Stay with Zoe .Marketing" ,
    p1:"1-6 Aug",
    h2:"11,845",
     p2:"night"
},
{
    img1:img19 ,
    img2:img20 ,
    img3: img21,
    h1: "Malakoff ,France" ,
    p:"Stay with Jacques- Oilvier .Ssii manager" ,
    p1:"22-27 Mar",
    h2:"6,180",
     p2:"night"
    
},
{

    img1:img18 ,
    img2: img17,
    img3: img16,
    h1: "Lyon " ,
    p:"Stay with Zoe .Marketing" ,
    p1:"1-6 Aug",
    h2:"11,845",
     p2:"night"
},
{
    img1:img20 ,
    img2:img23 ,
    img3: img21,
    h1: "France" ,
    p:"Stay with Jacques- Oilvier .Ssii manager" ,
    p1:"22-27 Mar",
    h2:"6,180",
     p2:"night"
    
},
{
    img1: img12,
    img2:img11 ,
    img3: img10,
    h1: "Milan, Italy" ,
    p:"Stay with Valentia . Interiro designer" ,
    p1:"19=8-23 Mar",
    h2:"8,291",
     p2:"night"
},
]