import React from 'react'
import "./card.css"
export const Card = (props) => {
    let {img1,img2,img3,h1,p,p1,h2,p2}=props  
  return (
   <>
   
   <div id="cardt">
   <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <h4>{h1}</h4>
    {/*<div style={{marginLeft:"270px",paddingTop:"10px",fontSize:"13px"}}><StarRateIcon /></div> */}
    <p>{p}</p>
    <p>{p1}</p>
    <p><span style={{color:"black",fontWeight:"blod"}}>&#8377;{h2}</span>&nbsp; {p2}</p>
   </div>

   </>
  )
}
