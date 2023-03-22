import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Note from './components/Note';
import Home from './components/Home';
import ReadingList from './components/ReadingList';
import Review from './components/Review/Review';

function App() {
  return(
    <div className="App">
        {/* <Review /> */}
      <Router> 
        <NavBar />
          <Routes baseline= 'the-reading-room/'>
            <Route exact path='/the-reading-room/home' element={<Home/>}/>
            {/* <Route  exact path = "/the-reading-room/note" element = {<Note/>} /> */}
            <Route exact path = '/the-reading-room/readinglist' element = {<ReadingList />}/>
            <Route exact path = '/the-reading-room/review' element = {<Review/>}/>
          </Routes>
      </Router>
    </div> 
);
}
export default App;

