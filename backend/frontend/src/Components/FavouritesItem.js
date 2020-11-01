import React from "react";

export default function FavouritesItem({
  deleteFavourite,
  id,
  artwork,
  artistName,
  trackName,
  collectionName,
}) {
  return (
    <div>
      <div className=" shadow favouriteItem">
        <div key={id}>
          <img src={artwork} alt="" />

          <p className="artistName">{artistName} </p>

          <p className="trackName">{trackName} </p>

          <p className="collectionName">{collectionName} </p>

          <button className="deleteFavourite " onClick={deleteFavourite}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
