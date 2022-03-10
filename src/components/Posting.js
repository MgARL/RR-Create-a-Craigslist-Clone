import React from 'react'

function Posting({ data }) {
  return (
    <div>
      <h2>{data.title}</h2>
      <h3>{data.price}</h3>    
      <img src={data.imageURL} alt={data.title}/>
      <p>{data.description}</p>
    </div>

  )
}

export default Posting
