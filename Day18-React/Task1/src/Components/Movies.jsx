import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
      .then((response) => {
        this.setState({ movies: response.data.results });
      });
  }
  render() {
    return (
      <>
        <div>this all Movies</div>
        {this.state.movies.map((f)=><Movie key={f.id} id={f.id} title={f.title} vote={f.vote_count}></Movie>)}
      </>
    );
  }
}
