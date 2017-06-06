import React from "react";
import FilmDetail from "../components/FilmDetail.jsx";
import FilmSelector from "../components/FilmSelector.jsx";
import ActorSelector from "../components/ActorSelector.jsx";

class FilmContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      actors: ["Morgan Freeman", "Matt Damon", "Adam Sandler", "Will Smith"],
      selectedFilm: null
    };
    this.setSelectedFilm = this.setSelectedFilm.bind(this);
    this.setSelectedActor = this.setSelectedActor.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Netflix API</h1>
        <ActorSelector actors={this.state.actors} onSelectActor = {this.setSelectedActor} />
        <FilmSelector films = {this.state.films} onSelectFilm = {this.setSelectedFilm} />
        <FilmDetail film = {this.state.selectedFilm} />
      </div>
    );
  }

  getData(name) {
    const url = "http://netflixroulette.net/api/api.php?actor=" + name;
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({films: data, selectedFilm: data[0]});
    });
    request.send();
  }

  componentDidMount() {
    this.getData("Morgan Freeman");
  }

  setSelectedFilm(film) {
    this.setState({selectedFilm: film});
  }

  setSelectedActor(actor) {
    this.setState({selectedActor: actor});
    this.getData(actor);
  }

}

export default FilmContainer;