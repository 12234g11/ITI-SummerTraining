import React from 'react'

export default function Movie({id,name}) {
  return (
    <div style={{backgroundColor:'red',margin:30}}>
      <h1>Id:{id}</h1>
      <h1>Movie Name:{name}</h1>
    </div>
  )
}
