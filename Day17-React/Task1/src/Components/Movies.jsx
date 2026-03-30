import React, { useState } from "react";
import Movie from "./Movie";
export default function Movies() {
  const [data] = useState([
    { name: "Movie 1", id: 1 },
    { name: "Movie 2", id: 2 },
    { name: "Movie 3", id: 3 },
    { name: "Movie 4", id: 4 },
  ]);
  console.log(data);
  return (
    <>
      Movies
      {data.map((f) => (
        <Movie key={f.id} id={f.id} name={f.name} />
      ))}
    </>
  );
}
