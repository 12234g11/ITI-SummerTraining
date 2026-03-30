import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [movies, setTrendingMovies] = useState([]);

  async function getTrending() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=fb0ce91ffb7e4ce36ebe5882861ff595`
    );
    setTrendingMovies(data.results);
  }

  useEffect(() => {
    getTrending();
  }, []);

  return (
        <div className="container text-center my-4">
    <div className="row mt-5">
            {movies.map((item) => (
              <div key={item.id} className="col-6 col-md-3 col-lg-2">
                <Link to={`/productdetailes/${item.id}`}style={{ textDecoration: 'none', color: 'black' ,fontWeight:'600' }}>
                  <div className="movie">
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                      className="w-100"
                      alt=""
                    />
                    <h3 className="h6 my-2">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          </div>
  );
}
