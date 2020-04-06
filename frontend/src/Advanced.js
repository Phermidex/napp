import React from "react";
import "./advanced.css";
import loadingimg from "./activity.gif";

class Advanced extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      limit: 5,
      jokes: [],
      isFecthingJoke: false
    };

    this.onTelljoke = this.onTelljoke.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onlimitChange = this.onlimitChange.bind(this);
  }

  componentDidMount() {
    this.searchJokes();
  }

  searchJokes() {
    this.setState({ isFecthingJoke: true });
    fetch(
      `https://icanhazdadjoke.com/search?term=${this.state
        .searchTerm}&limit=${this.state.limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        const jokes = json.results;
        this.setState({
          jokes,
          isFecthingJoke: false
        });
      });
  }

  onTelljoke() {
    this.searchJokes();
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onlimitChange(event) {
    this.setState({ limit: event.target.value });
  }

  onSearchSubmit(event) {
    event.preventDefault();
    this.searchJokes();
  }

  renderJokes() {
    return (
      <ul>
        {this.state.jokes.map(item =>
          <li key={item.id}>
            {item.joke}
          </li>
        )}
      </ul>
    );
  }

  render() {
    console.log("----RENDER----");

    return (
      <div className="page-advanced">
        <form onSubmit={this.onSearchSubmit}>
          <select onChange={this.onlimitChange}>
            <option value="5">Five results</option>
            <option value="10">Ten results</option>
            <option value="100">All results</option>
          </select>
          <input
            type="text"
            placeholder="Enter search term..."
            onChange={this.onSearchChange}
          />
          <button>
            <i className="fa fa-search" aria-hidden="true" />
          </button>

          <button
            onClick={this.onTelljoke}
            disabled={this.state.isFecthingJoke}
          >
            Tell me a joke
          </button>
        </form>
        <p className="term-params">
          Search term: {this.state.searchTerm}
        </p>
        <ul>
          {this.state.isFecthingJoke
            ? <div className="loadingSearch">
                <img src={loadingimg} />
              </div>
            : this.renderJokes()}
        </ul>
      </div>
    );
  }
}

export default Advanced;
