import React from "react";
import FavouritesItem from "./FavouritesItem";

export default function Favourites({ favourites, deleteFavourite }) {
  if (favourites.length > 0) {
    return (
      <div className="container favourites">
        <div
          className="container favouritesContainer"
          style={{ marginTop: "-18px" }}
        >
          {favourites.map((item, index) => {
            return (
              <div key={index}>
                <FavouritesItem
                  artistName={item.artistName}
                  trackName={item.trackName}
                  collectionName={item.collectionName}
                  artwork={item.artwork}
                  deleteFavourite={() => deleteFavourite(item.id)}
                />
              </div>
            );
          })}
        </div>

        {favourites.length > 6 ? (
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
        className="container noFavouritesContainer"
        style={{ marginTop: "-18px" }}
      >
        <h4>No Favourites</h4>
      </div>
    );
  }
}
