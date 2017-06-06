import React from 'react';

class ActorSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {

    const options = this.props.actors.map((actor, index) => {
      return <option value = {index} key={index}> {actor}</option>
    })

    return (
      <select id="actors" onChange={this.handleChange} value={this.state.selectedIndex}>
      {options}
      </select>
      )
  }

  handleChange(event){
    const index = event.target.value
    this.setState({selectedIndex: index })

    const actor = this.props.actors[index];
    this.props.onSelectActor(actor)
  }
}

export default ActorSelector;