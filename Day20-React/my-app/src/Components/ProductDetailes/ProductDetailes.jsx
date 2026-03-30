import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailes() {
  const [itemDetailes, setItemDetailes] = useState({});
  let { id } = useParams();
  async function getItemDetailes(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0877fff4d5fc2afbbadbea6d31c7a353&language=en-US`
    );
    setItemDetailes(data);
  }
  useEffect(() => {
    getItemDetailes(id);
  }, []);
  return (
    <>
      <div className="row container">
        <div className="col-8 col-md-4 col-lg-3 mx-auto mb-5">
            <img
              className="w-100"
              src={"https://image.tmdb.org/t/p/w500" + itemDetailes.poster_path}
              alt=""
            />
        </div>

        <div className="col-12 col-md-8 col-lg-9">
          <h2 className="h3">
            {itemDetailes.title}
          </h2>
          <h3 className="h5">{itemDetailes.tagline}</h3>
          <div>
            {itemDetailes.genres?.map((g) => (
              <span key={g.id} className=" me-2">
                {g.name}
              </span>
            ))}
          </div>
          <br />
          {itemDetailes.vote_average ? (
            <h6>Vote : {itemDetailes.vote_average.toFixed(1)}</h6>
          ) : (
            ""
          )}
          {itemDetailes.vote_count ? (
            <h6>Vote Count : {itemDetailes.vote_count}</h6>
          ) : (
            ""
          )}
          {itemDetailes.popularity ? (
            <h6>Popularity : {itemDetailes.popularity}</h6>
          ) : (
            ""
          )}
          {itemDetailes.release_date ? (
            <h6>Release Date : {itemDetailes.release_date}</h6>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
