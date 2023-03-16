import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Note from './components/Note';
import Home from './components/Home';
import Notes from './components/Notes';
import Review from './components/Review/Review';

function App() {
  return(
    <div className="App">
      <Router> 
        <NavBar />
        {/* <Review /> */}
          <Routes baseline= 'the-reading-room'>
            <Route exact path='/the-reading-room/' element={<Home/>}/>
            <Route  exact path = "/the-reading-room/note" element = {<Note/>} />
            <Route exact path = '/the-reading-room/notes' element = {<Notes/>}/>
            <Route exact path = '/the-reading-room/review' element = {<Review/>}/>
          </Routes>
      </Router>
    </div> 
);
}
export default App;

