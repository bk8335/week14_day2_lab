import React from 'react'

class FilmDetail extends React.Component {

  render() {
    if (this.props.film === null) return null;

    return (
      <div className = "film-details">
      <h2>{this.props.film.show_title}</h2>
      <h3>{this.props.film.release_year}</h3>
      <h3>{this.props.film.category}</h3>
      <p>{this.props.film.runtime}</p>
      </div>
    )
  }


}

export default FilmDetail