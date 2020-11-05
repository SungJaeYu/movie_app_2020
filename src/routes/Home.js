import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoadig: true,
    movies: []
  };
  getMovies = async () => {
    const {data: {
      data: {
        movies
      }
    }} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoadig: false });
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoadig, movies } = this.state;
    return( <section className="container">
      {isLoadig 
      ? <div className="loader">
        <span className="loader__text">Loading...</span>
      </div> 
      : (
        <div className="movies">
          {movies.map(movie => (
      <Movie key={movie.id}
                    id={movie.id}
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres} />
          ))}
        </div>
      )}
    </section>
    );
  }
}

export default Home;