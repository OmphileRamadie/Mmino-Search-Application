import React from "react";

export default function ResultsItem({
  addToFavourites,
  trackId,
  artwork,
  artistName,
  trackName,
  collectionName,
}) {
  return (
    <div className=" shadow resultItem">
      <div key={trackId}>
        {artwork !== "" ? (
          <img src={artwork} width={100} height={100} alt="Thumbnail" />
        ) : (
          ""
        )}

        <p className="artistName">{artistName} </p>

        <p className="trackName">{trackName} </p>

        <p className="collectionName">{collectionName} </p>

        <button className="addFavourite" onClick={addToFavourites}>
          Add To Favourites <span>+</span>
        </button>
      </div>
    </div>
  );
}
