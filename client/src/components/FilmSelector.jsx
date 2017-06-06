import React from 'react';

class FilmSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {

    const options = this.props.films.map((film, index) => {
      return <option value = {index} key={index}> {film.show_title}</option>
    })

    return (
      <select id="films" onChange={this.handleChange} value={this.state.selectedIndex}>
      {options}
      </select>
      )
  }

  handleChange(event){
    const index = event.target.value
    this.setState({selectedIndex: index })

    const film = this.props.films[index];
    this.props.onSelectFilm(film)
  }
}

export default FilmSelector;