import React from 'react'
import Posting from './Posting'
import { postings } from '../postings'

function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      {postings.map((posting, index) => {
        return <Posting data={posting} key={index} />
      })}
    </div>
  )
}

export default Gallery