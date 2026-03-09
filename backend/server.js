const express = require("express");

// file
const {PORT} = require("./example.env.js");

const app = express();

app.get('/', (req, res) => {
    res.send("Helloooo 🙌🙌")
});

app.listen(PORT, () => {
    console.log("🥰 Server is running on PORT: ", PORT, " 🥰")
});