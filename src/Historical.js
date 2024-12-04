import React from "react";

export default function Entry2(props){
  return(
    <article className="container">
      <div className="pictures" id="grid1" >

<img  className="grid-item" src={props.img}/>

     <div className="grid-item">
     <div id="grid2">
       <div className="grid-item">
      <div className="icon ">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>

      </div>
      </div>
    
      <div className="grid-item">
<h3>{props.country}</h3>
</div>
<div className="grid-item">
<a href={props.googleMapsLink}
>View on Google Maps</a>
</div>
</div>
<h1>{props.name}</h1>
<h4>
{props.date}
</h4>
{props.text}
</div>
</div>
</article>

  );
}