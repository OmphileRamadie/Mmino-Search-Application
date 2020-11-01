import React, { useState, useEffect } from "react";
import SearchInput from "./Components/SearchInput";
import SearchResults from "./Components/SearchResults";
import Favourites from "./Components/Favourites";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  const [state, setState] = useState({
    searchInput: "",
    searchInitiated: false,
    value: "all",
    results: [],
    favourites: [],
    viewResults: true,
    artistName: "",
    trackName: "",
    collectionName: "",
    artwork: "",
  });

  const handleInputChange = (event) => {
    setState({
      ...state,
      searchInput: event.target.value,
    });
  };

  const handleSelectChange = (event) => {
    setState({ ...state, value: event.target.value });
  };

  const search = () => {
    const { value, searchInput } = state;
    if (searchInput !== "") {
      fetch("/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchInput: searchInput,
          category: value,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          setState({
            ...state,
            results: response.Data.results,
            searchInitiated: true,
          });
        })
        .catch((error) => console.log("Error:", error));
    } else {
      alert("Please Enter a Search Query");
    }
  };

  const addToFavourites = (id) => {
    const { results } = state;
    var selectedItem = results.find((item) => item.trackId === id);

    setState({
      ...state,
      artistName: selectedItem.artistName,
      trackName: selectedItem.trackName,
      collectionName: selectedItem.collectionName,
      artwork: selectedItem.artworkUrl100,
    });
  };

  const deleteFavourite = (id) => {
    fetch(`/favourites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        setState({
          ...state,
          favourites: response.data,
        });
        alert(response.status);
      })
      .catch((error) => console.log("Error:", error));
  };

  useEffect(() => {
    if (state.artistName !== "") {
      fetch("/favourites/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          artistName: state.artistName,
          trackName: state.trackName,
          collectionName: state.collectionName,
          artwork: state.artwork,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          setState({
            ...state,
            favourites: response.data,
            artistName: "",
            trackName: "",
            collectionName: "",
            artwork: "",
          });
          alert(response.status);
        })
        .catch((error) => console.log("Error:", error));
    }
  }, [state.artistName]);

  useEffect(() => {
    fetch("/favourites")
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, favourites: data });
      });
  }, []);

  const clearInput = () => {
    setState({
      ...state,
      searchInput: "",
    });
  };

  if (state.searchInitiated) {
    return (
      <Router>
        <div className="App">
          <SearchInput
            value={state.value}
            searchInput={state.searchInput}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            search={search}
            searchInitiated={state.searchInitiated}
            clearInput={clearInput}
          />
          <Menu />

          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <SearchResults
                    results={state.results}
                    addToFavourites={addToFavourites}
                  />
                );
              }}
            />
            <Route
              exact
              path="/Favourites"
              render={() => {
                return (
                  <Favourites
                    favourites={state.favourites}
                    deleteFavourite={deleteFavourite}
                  />
                );
              }}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  } else {
    return (
      <div className="App">
        <SearchInput
          value={state.value}
          searchInput={state.searchInput}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          search={search}
          clearInput={clearInput}
        />

        <Footer />
      </div>
    );
  }
};

export default App;
