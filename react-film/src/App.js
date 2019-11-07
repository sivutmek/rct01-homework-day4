import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';
import './index.css';

const { films } = TMDB;

class App extends Component {
  state = {
    films: films,
    faves: [],
    current: []
  };

  handleFaveToggle = film => {
    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film);
    if (filmIndex === -1) {
      faves.push(film);
    } else {
      faves.splice(filmIndex, 1);
    }
    this.setState({ faves });
  };

  handleDetailsClick = film => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ current: data });
      });
  };

  render() {
    return (
      <div className="film-library">
        <FilmListing
          films={this.state.films}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
          handleDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails films={this.state.current} />
      </div>
    );
  }
}

export default App;
