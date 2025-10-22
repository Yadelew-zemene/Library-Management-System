const express = require("express");
const bodyparser = require("body-parser");
const port = 3000;
const server = express();
let books = [
    {
        bookName: "Rudest Book Ever",
        bookAuthor: "Shwetabh Gangwar",
        bookPages: 200,
        bookPrice: 240,
        bookState: "Available"
    },
    {
        bookName: "Do Epic Shit",
        bookAuthor: "Ankur Wariko",
        bookPages: 200,
        bookPrice: 240,
        bookState: "Available"
    }
];
server.set("view engine", "ejs");
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
// home route
server.get("/", (req, res) => {
    res.render('index', { data: books });
})



server.listen(port, (err) => {
    if (err) {
        console.log(chalk.red("Error found"));
    } 
    else {
        console.log("Listening at Port number 3000...")
    }
    
})

