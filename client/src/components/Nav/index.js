import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Bot Store
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Bots
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/clients" ? "nav-link active" : "nav-link"}
                to="/clients"
              >
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/create" ? "nav-link active" : "nav-link"}
                to="/create"
              >
                Add Bot
              </Link>
            </li>            
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/demo" ? "nav-link active" : "nav-link"}
                to="/demo"
              >
                Demo
              </Link>              
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                to="/about"
              >
                About
              </Link>              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;