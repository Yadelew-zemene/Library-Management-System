const express = require("express");
const bodyparser = require("body-parser");
const port = 4000;
const server = express();
const response=""
const books = [
   
  { bookName: "The Alchemist", bookAuthor: "Paulo Coelho", bookPage: 197, bookPrice: 220, bookState: "Available" },
  { bookName: "Atomic Habits", bookAuthor: "James Clear", bookPage: 320, bookPrice: 300, bookState: "Issued" },
  { bookName: "Think and Grow Rich", bookAuthor: "Napoleon Hill", bookPage: 250, bookPrice: 280, bookState: "Available" },
  { bookName: "Rich Dad Poor Dad", bookAuthor: "Robert Kiyosaki", bookPage: 280, bookPrice: 260, bookState: "Available" },
  { bookName: "Deep Work", bookAuthor: "Cal Newport", bookPage: 305, bookPrice: 330, bookState: "Available" },
  { bookName: "Can't Hurt Me", bookAuthor: "David Goggins", bookPage: 364, bookPrice: 350, bookState: "Issued" },
  { bookName: "The Subtle Art of Not Giving a F*ck", bookAuthor: "Mark Manson", bookPage: 224, bookPrice: 240, bookState: "Available" },
  { bookName: "Do Epic Shit", bookAuthor: "Ankur Warikoo", bookPage: 220, bookPrice: 300, bookState: "Available" },
  { bookName: "The Psychology of Money", bookAuthor: "Morgan Housel", bookPage: 252, bookPrice: 290, bookState: "Available" },
  { bookName: "Ego is the Enemy", bookAuthor: "Ryan Holiday", bookPage: 256, bookPrice: 270, bookState: "Available" },
  { bookName: "The Rudest Book Ever", bookAuthor: "Shwetabh Gangwar", bookPage: 200, bookPrice: 240, bookState: "Available" },
  { bookName: "Start With Why", bookAuthor: "Simon Sinek", bookPage: 320, bookPrice: 310, bookState: "Issued" },
  { bookName: "Leaders Eat Last", bookAuthor: "Simon Sinek", bookPage: 360, bookPrice: 320, bookState: "Available" },
  { bookName: "The Power of Habit", bookAuthor: "Charles Duhigg", bookPage: 371, bookPrice: 350, bookState: "Available" },
  { bookName: "Mindset", bookAuthor: "Carol S. Dweck", bookPage: 288, bookPrice: 300, bookState: "Available" },
  { bookName: "Drive", bookAuthor: "Daniel H. Pink", bookPage: 280, bookPrice: 260, bookState: "Available" },
  { bookName: "The 5 AM Club", bookAuthor: "Robin Sharma", bookPage: 336, bookPrice: 290, bookState: "Issued" },
  { bookName: "Who Moved My Cheese?", bookAuthor: "Spencer Johnson", bookPage: 94, bookPrice: 150, bookState: "Available" },
  { bookName: "How to Win Friends and Influence People", bookAuthor: "Dale Carnegie", bookPage: 320, bookPrice: 280, bookState: "Available" },
  { bookName: "The Monk Who Sold His Ferrari", bookAuthor: "Robin Sharma", bookPage: 198, bookPrice: 230, bookState: "Available" },
  { bookName: "The One Thing", bookAuthor: "Gary Keller", bookPage: 240, bookPrice: 270, bookState: "Available" },
  { bookName: "Zero to One", bookAuthor: "Peter Thiel", bookPage: 224, bookPrice: 290, bookState: "Available" },
  { bookName: "Sapiens", bookAuthor: "Yuval Noah Harari", bookPage: 498, bookPrice: 420, bookState: "Issued" },
  { bookName: "Homo Deus", bookAuthor: "Yuval Noah Harari", bookPage: 512, bookPrice: 450, bookState: "Available" },
  { bookName: "21 Lessons for the 21st Century", bookAuthor: "Yuval Noah Harari", bookPage: 368, bookPrice: 400, bookState: "Available" },
  { bookName: "The Art of Thinking Clearly", bookAuthor: "Rolf Dobelli", bookPage: 384, bookPrice: 320, bookState: "Available" },
  { bookName: "The Power of Now", bookAuthor: "Eckhart Tolle", bookPage: 236, bookPrice: 260, bookState: "Issued" },
  { bookName: "The Magic of Thinking Big", bookAuthor: "David J. Schwartz", bookPage: 320, bookPrice: 310, bookState: "Available" },
  { bookName: "You Can Win", bookAuthor: "Shiv Khera", bookPage: 320, bookPrice: 270, bookState: "Available" },
  { bookName: "Be Your Own Sunshine", bookAuthor: "James Allen", bookPage: 180, bookPrice: 190, bookState: "Available" },
  { bookName: "Ikigai", bookAuthor: "Héctor García", bookPage: 208, bookPrice: 250, bookState: "Available" },
  { bookName: "The Courage to Be Disliked", bookAuthor: "Ichiro Kishimi", bookPage: 276, bookPrice: 300, bookState: "Available" },
  { bookName: "Man’s Search for Meaning", bookAuthor: "Viktor E. Frankl", bookPage: 200, bookPrice: 270, bookState: "Available" },
  { bookName: "The 7 Habits of Highly Effective People", bookAuthor: "Stephen Covey", bookPage: 381, bookPrice: 350, bookState: "Available" },
  { bookName: "Outliers", bookAuthor: "Malcolm Gladwell", bookPage: 304, bookPrice: 310, bookState: "Available" },
  { bookName: "Blink", bookAuthor: "Malcolm Gladwell", bookPage: 320, bookPrice: 300, bookState: "Available" },
  { bookName: "David and Goliath", bookAuthor: "Malcolm Gladwell", bookPage: 305, bookPrice: 290, bookState: "Issued" },
  { bookName: "Grit", bookAuthor: "Angela Duckworth", bookPage: 333, bookPrice: 340, bookState: "Available" },
  { bookName: "Educated", bookAuthor: "Tara Westover", bookPage: 352, bookPrice: 330, bookState: "Available" },
  { bookName: "Becoming", bookAuthor: "Michelle Obama", bookPage: 426, bookPrice: 400, bookState: "Available" },
  { bookName: "The Lean Startup", bookAuthor: "Eric Ries", bookPage: 336, bookPrice: 320, bookState: "Available" },
  { bookName: "Principles", bookAuthor: "Ray Dalio", bookPage: 592, bookPrice: 500, bookState: "Available" },
  { bookName: "Rework", bookAuthor: "Jason Fried", bookPage: 288, bookPrice: 280, bookState: "Available" },
  { bookName: "Hooked", bookAuthor: "Nir Eyal", bookPage: 256, bookPrice: 270, bookState: "Issued" },
  { bookName: "Tools of Titans", bookAuthor: "Tim Ferriss", bookPage: 707, bookPrice: 550, bookState: "Available" },
  { bookName: "Tribe of Mentors", bookAuthor: "Tim Ferriss", bookPage: 624, bookPrice: 520, bookState: "Available" },
  { bookName: "Crushing It!", bookAuthor: "Gary Vaynerchuk", bookPage: 288, bookPrice: 290, bookState: "Available" },
  { bookName: "The Everything Store", bookAuthor: "Brad Stone", bookPage: 384, bookPrice: 310, bookState: "Available" },
  { bookName: "Steve Jobs", bookAuthor: "Walter Isaacson", bookPage: 656, bookPrice: 480, bookState: "Available" },
  { bookName: "Elon Musk", bookAuthor: "Ashlee Vance", bookPage: 400, bookPrice: 420, bookState: "Available" },
  { bookName: "The Innovators", bookAuthor: "Walter Isaacson", bookPage: 560, bookPrice: 450, bookState: "Available" }

];
server.set("view engine", "ejs");
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
// home route
server.get("/", (req, res) => {
    res.render('index', { data: books });
    
});
server.post("/", (req, res) => {
    let newbook = {
        bookName: req.body.bookName,
        bookAuthor: req.body.bookAuthor,
        bookPages: req.body.bookPages,
        bookPrice: req.body.bookPrice,
        bookState: req.body.bookState

    };
    books.push(newbook);
    res.render("index", { data: books },response);
});
server.post("/issue", (req, res) => {
    const requestedBookName = req.body.bookName;
    books.forEach(book => {
        if (book.bookName === requestedBookName) {
            book.bookState = "Issued";
        }
        

    });
    res.render("index", { data: books });
});
server.post("/return", (req, res) => {
    const requestedBookName = req.body.bookName;
    books.forEach(book => {
        if (book.bookName == requestedBookName) {
            book.bookState = "Available";
        }
    })
    res.render("index", { data: books });
});
server.post("/delete", (req, res) => {
    const requestedBook = req.body.bookName;
    books = books.filter(book => book.bookName !==requestedBook);

    res.render("index", { data: books });

});



server.listen(port, (err) => {
    if (err) {
        console.log(chalk.red("Error found"));
    } 
    else {
        console.log("Listening at Port number ...",port)
    }
    
})

