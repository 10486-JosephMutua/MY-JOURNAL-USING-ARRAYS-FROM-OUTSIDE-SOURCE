import React from "react";
import "./style.css";
import Entry from "./Entry";
import Historical from "./Historical";
export default function App() {

  const modifiedData=Entry.map((child) => {
  return (<Historical key={child.id}
img={child.img}
country={child.country}
googleMapsLink={child.googleMapsLink}
name={child.title}
date={child.dates}
text={child.text}
  
  />)
  }
  )
  return (
    <main>
   {modifiedData}
   </main>
  );
}
