import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Note from './components/Note';
import Home from './components/Home';
import ReadingList from './components/ReadingList';
import BookNote from './components/BookNote/BookNote';

function App() {
  return(
    <div className="App">
      <Router> 
        <NavBar />
        
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/readinglist" element={<ReadingList/>}/>
          <Route path="/booknotes" element={<BookNote/>}/>
          <Route path="*" element={<Navigate to="/" />} />
            {/* <Route exact path='/the-reading-room/' element={<Home/>}/> */}
            {/* <Route  exact path = "/the-reading-room/note" element = {<Note/>} /> */}
            {/* <Route exact path = '/the-reading-room/readinglist' element = {<ReadingList />}/> */}
            {/* <Route exact path = '/the-reading-room/review' element = {<Review/>}/> */}
          </Routes>
      </Router>
    </div> 
);
}
export default App;

