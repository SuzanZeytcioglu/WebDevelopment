import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h2>Hello World!</h2>");
});

app.get("/contact", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h2>000000000</h2>");
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`);
});