//Imports
import React from "react";
import "./style.css";

//Landing section code
const Home = () => {
    return (
        <div id = "home">
            <h1>The Reading Room</h1>
            <h3>What are you reading?</h3>
            <a href="./review">
            <button>Review now</button>
            </a>
            <a href="./readinglist">
            <button id = "reading-list">Your Reading list</button>
            </a>
            <p id = "quote1" class = "bg-text">"If you don’t like to read, you haven’t found the right book."</p>
            <p id = "quote2" class = "bg-text">"Never trust anyone who has not brought a book with them."</p>
            <p id = "quote3" class = "bg-text">"Of course anyone who truly loves books buys more of them than he or she can hope to read in one fleeting lifetime. A good book, resting unopened in its slot on a shelf, full of majestic potentiality, is the most comforting sort of intellectual wallpaper."</p>
            <p id = "quote4" class = "bg-text">"You can never get a cup of tea large enough or a book long enough to suit me."</p>
            <p id = "quote6" class = "bg-text">"The more that you read, the more things you will know. The more that you learn, the more places you’ll go."</p>
            <p id = "quote7" class = "bg-text">"A good book is an event in my life."</p>
            <p id = "quote8" class = "bg-text">"What better occupation, really, than to spend the evening at the fireside with a book, with the wind beating on the windows and the lamp burning bright."</p>
        </div>
    )
}

//Exports
export default Home