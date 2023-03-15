import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Note from './components/Note';
import Home from './components/Home';
import Notes from './components/Notes';
import Review from './components/Review'

function App() {
  return(
    <>
      <Router> 
        <NavBar />
          <Routes baseline= 'the-reading-room'>
            <Route exact path='/the-reading-room/' element={<Home/>}/>
            <Route  exact path = "/the-reading-room/note" element = {<Note/>} />
            <Route exact path = '/the-reading-room/notes' element = {<Notes/>}/>
            <Route exact path = '/the-reading-room/review' element = {<Review/>}/>
          </Routes>
      </Router>
    </>
  
)
}
export default App;

