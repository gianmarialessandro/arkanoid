import React, { Component } from "react";
import "./pagina.css";
import { Link } from "react-router-dom";
import { fixPaginettaPageWidth, clearPaginettaPageWidth } from "./utils";

export default class Pagina extends Component {
    componentDidMount() {
        fixPaginettaPageWidth()
    }

    componentWillUnmount() {
        clearPaginettaPageWidth()
    }


  render() {
    return (
      <div className="prova">
        <h2>ciaone</h2>
        <br />
        <ul>
          <li>
            {/* Endpoint to route to Home component */}
            <Link to="/pagina">pagina</Link>
          </li>
          <li>
            {/* Endpoint to route to About component */}
            <Link to="/home">home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
