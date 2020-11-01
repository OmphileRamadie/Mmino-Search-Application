const express = require("express");
const fs = require("fs");
const fetch = require("node-fetch");
const router = express.Router();

let { writeData, content } = require("../helpers/helpers");

router.post("/search", async (req, res) => {
  const searchInput = req.body.searchInput;
  const category = req.body.category;

  if (category === "all") {
    var url = `https://itunes.apple.com/search?term=${searchInput}`;
  } else {
    var url = `https://itunes.apple.com/search?term=${searchInput}&entity=${category}`;
  }

  const fetch_response = await fetch(url);
  const result = await fetch_response.json();

  res.json({ Data: result });
});

router.get("/favourites", (req, res) => {
  content.length === 0
    ? res.json({ message: "No data available." })
    : res.send(content);
});

router.post("/favourites/new", (req, res) => {
  let artistName = req.body.artistName;
  let trackName = req.body.trackName;
  let collectionName = req.body.collectionName;

  let duplicateItem = content.find((item) => {
    return item.artistName === artistName && item.trackName === trackName;
  });

  console.log(duplicateItem);

  if (duplicateItem === undefined) {
    if (content.length === 0) {
      var id = 1;
    } else {
      var id = content[content.length - 1].id + 1;
    }

    const new_post = Object.assign({ id }, req.body);

    content.push(new_post);

    writeData(
      content,
      `Item #${id} was successfully added to My favourites!`,
      res
    );
  } else {
    writeData(content, `Item is already in your favourites`, res);
  }
});

router.delete("/favourites/:id", (req, res) => {
  const id = req.params.id;
  const Posts = content.filter((p) => p.id != id);
  const post = content.find((p) => p.id == id);

  post == undefined
    ? res.json({ message: `Item #${id} does not exist.` })
    : (content = Posts);

  writeData(
    content,
    `Item #${id} was succesfully deleted from my favourites`,
    res
  );
});

module.exports = router;
