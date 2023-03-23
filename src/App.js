import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Note from './components/Note';
import Home from './components/Home';
import ReadingList from './components/ReadingList';
import BookNote from './components/BookNote/BookNote';

function App() {
  return(
    <div className="App">
      <HashRouter> 
        <NavBar />
        
          <Routes>
            <Route basename="/the-reading-room/"/>
            <Route path='/' element={<Home/>}/>
            <Route path = "/booknotes" element = {<BookNote/>} />
            <Route path = '/readinglist' element = {<ReadingList />}/>
            {/* <Route exact path = '/the-reading-room/review' element = {<Review/>}/> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          {/* <Route path="/" element={<Home />}/>
          <Route path="/readinglist" element={<ReadingList/>}/>
          <Route path="/booknotes" element={<BookNote/>}/> */}
          </Routes>
      </HashRouter>
    </div> 
);
}
export default App;

