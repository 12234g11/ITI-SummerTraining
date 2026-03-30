import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpg";
import img3 from "./imgs/img3.jpg";
import img4 from "./imgs/img4.jpg";
import img5 from "./imgs/img5.jpg";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";

export default function Home() {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movies, setTrendingMovies] = useState([]);

  const { products } = useOutletContext();

  const nextSlide = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  };

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
    <>
      <div className="container text-center my-4">
        <h2 className="mb-4">Image Slider</h2>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-primary me-2" onClick={prevSlide}>Previous</button>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="img-thumbnail"
            style={{ width: "500px", height: "300px", objectFit: "cover" }}
          />
          <button className="btn btn-primary ms-2" onClick={nextSlide}>Next</button>
        </div>

        <div className="row mt-5">
          {movies.slice(0, 6).map((item) => (
            <div key={item.id} className="col-6 col-md-3 col-lg-2">
              <Link
                to={`/productdetailes/${item.id}`}
                style={{ textDecoration: "none", color: "black", fontWeight: "600" }}
              >
                <div className="movie">
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    className="w-100"
                    alt=""
                  />
                  <h3 className="h6 my-2">{item.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <h2>Product List</h2>
        <div className="row mt-3">
          {products.length === 0 ? (
            <p>No products available. Please add some.</p>
          ) : (
            products.map((product, index) => (
              <div key={index} className="text-center col-md-3 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                    <p className="card-text"><strong>Category:</strong> {product.category}</p>
                    <p className="card-text"><strong>Discount:</strong> {product.discount}%</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
