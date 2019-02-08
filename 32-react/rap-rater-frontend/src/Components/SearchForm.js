import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.changeHandler}
          placeholder="Search Rappers"
        />
      </form>
    );
  }
}

export default SearchForm;
