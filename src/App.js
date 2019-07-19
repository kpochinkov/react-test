import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: []
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
        <SimpleComponent />
      </div>
    );
  }
}

const SimpleComponent = () => {
  return <div>Example</div>;
};

export default App;
