import React from "react";
import hero from "../media/hero.mp4";

export default function SearchInput({
  search,
  value,
  searchInput,
  handleSelectChange,
  handleInputChange,
  clearInput,
  searchInitiated,
}) {
  return (
    <div
      className="showCase"
      style={{ height: searchInitiated ? "90vh" : "100vh" }}
    >
      <header className=" container header">
        <h3 className="logo" id="top">
          MMINO
        </h3>

        <ul className="menu">
          <li>Home</li>
        </ul>
      </header>

      <div className="video-container">
        <video src={hero} autoPlay muted loop></video>
      </div>
      <div className="searchTextContainer">
        <h2>Search For Your Favourite Media Content</h2>
      </div>
      <div className="container searchInput">
        <div className="container inputContainer">
          <input
            type="text"
            placeholder="Search eg: Kaytranada"
            value={searchInput}
            onChange={handleInputChange}
            className="input "
          />
          {searchInput !== "" ? (
            <button className="clearInput" onClick={clearInput}>
              <i
                className="fa fa-times-circle ml-2 mt-2"
                aria-hidden="true"
              ></i>
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="selectContainer">
          <select
            value={value}
            onChange={handleSelectChange}
            className="select"
          >
            <option
              className="option"
              value="all"
              style={{ backgroundColor: "black" }}
            >
              All
            </option>
            <option value="software" style={{ backgroundColor: "black" }}>
              Software
            </option>
            <option value="tvSeason" style={{ backgroundColor: "black" }}>
              TvShow
            </option>
            <option value="shortFilm" style={{ backgroundColor: "black" }}>
              ShortFilm
            </option>
            <option value="audiobook" style={{ backgroundColor: "black" }}>
              AudioBook
            </option>
            <option value="musicVideo" style={{ backgroundColor: "black" }}>
              MusicVideo
            </option>
            <option value="musicTrack" style={{ backgroundColor: "black" }}>
              Music
            </option>
            <option value="podcast" style={{ backgroundColor: "black" }}>
              Podcast
            </option>
            <option value="movie" style={{ backgroundColor: "black" }}>
              Movie
            </option>
            <option value="ebook" style={{ backgroundColor: "black" }}>
              Ebook
            </option>
          </select>
        </div>

        <button className="searchBtn" onClick={search}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
