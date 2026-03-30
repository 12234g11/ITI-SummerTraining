import React from 'react'

export default function Movie({id,title,vote}) {
  return (
    <div style={{backgroundColor:'red',margin:30}}>
      <h1>Id:{id}</h1>
      <h1>Movie Name:{title}</h1>
      <h1>Vote Count:{vote}</h1>
    </div>
  )
}
