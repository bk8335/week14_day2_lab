import React from 'react'

class FilmDetail extends React.Component {

  render() {
    if (this.props.film === null) return null;

    return (
      <div className = "film-details">
      <h2>{this.props.film.show_title}</h2>
      <h3>Year: {this.props.film.release_year}</h3>
      <h3>Genre: {this.props.film.category}</h3>
      <p>Runtime: {this.props.film.runtime}</p>
      <img src= {this.props.film.poster} /> 
      </div>
    )
  }


}

export default FilmDetail