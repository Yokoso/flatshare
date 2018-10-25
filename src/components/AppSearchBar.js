import React, { Component } from "react";

class AppSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <div className="searchBar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        <p>Search input: {this.state.term}</p>
      </div>
    );
  }
}

export default AppSearchBar;
