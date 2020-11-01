import React from "react";
import ResultsItem from "./ResultsItem";

export default function SearchResults({ results, addToFavourites }) {
  if (results.length > 0) {
    return (
      <div className="container results">
        <div
          className="container resultsContainer"
          style={{ marginTop: "-18px" }}
        >
          {results.map((item, index) => {
            return (
              <div key={index}>
                <ResultsItem
                  artwork={item.artworkUrl100}
                  artistName={item.artistName}
                  trackName={item.trackName}
                  collectionName={item.collectionName}
                  addToFavourites={() => addToFavourites(item.trackId)}
                />
              </div>
            );
          })}
        </div>

        {results.length > 6 ? (
          <button className=" mt-5 mb-5 topBtn">
            {" "}
            <a href="#top">
              {" "}
              Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
            </a>
          </button>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return (
      <div
        className="container noResultsContainer"
        style={{ marginTop: "-18px" }}
      >
        <h4 className="">No results</h4>
      </div>
    );
  }
}
