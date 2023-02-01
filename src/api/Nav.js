import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://xivapi.com/item?limit=15")
      .then((response) => response.json())
      .then((data) => this.setState({ items: data.Results }));
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => {
          const id = item.ID;
          return (
            <li key={index}>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { fontWeight: "bold" } : {};
                }}
                to={`/items/${id}`}
              >
                {item.Name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Nav;
