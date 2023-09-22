import React from 'react'



export default function NewsParent({ title, content }) {
  const News = {
    width : "50%",
    alignContent: "center",
    margin: "0 auto",
  };
  const newsBox = {
    border: "1px solid #ccc",
    padding: "3rem 2rem",
    margin: " 2rem 0",
    textAlign: "justify",
    boxShadow: "2px 2px 2px 2px #ccc",
    boxShadow: "rgb(0, 0, 0.35) 0px 5px 10px", 
  };
  const sportTitle = {
    backgroundColor: "red", 
    textAlign: "center",
    color: "#fff",
    padding: "2px",
  };

  return (
    <div style={News}>
      <div style={newsBox}>
        <h4 style={sportTitle}>Title: {title}</h4>
        <div> Content: {content}</div>
      </div> 
    </div>
  )
}
