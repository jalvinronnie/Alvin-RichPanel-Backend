const express = require("express");

const port = process.env.PORT || 9000;

app.get("/",(req,res)=> res.status(200).send("TEST"));

app.listen(port, () => console.log('Listening on localhost:${port}'));
