
  import React from 'react'
  import { useState, useEffect } from 'react'

  function ReadingList() {
    const [currentBook, setCurrentBook] = useState({
      title: '',
      author: '',
      genre: '',
      briefDescription: ''
    })
    const [list, setList]=useState([])
  
    useEffect(() => {
      const data = window.localStorage.getItem('READING_LIST');
      if (data) {
        setCurrentBook(JSON.parse(data))
        console.log(data)
      }
    }, [])
    
    // useEffect(() => {
      //   window.localStorage.setItem('READING_LIST', JSON.stringify(currentBook))
      // }, [currentBook])
      
      const onSubmit= (e) =>{
      e.preventDefault();
      setList([currentBook,...list])
      window.localStorage.setItem('READING_LIST', JSON.stringify(currentBook))
      setCurrentBook({
      title: '',
      author: '',
      genre: '',
      briefDescription: ''})
    }

    return (
      <>
        {/* <div>Reading list</div> */}
        <form onSubmit={onSubmit}>
          <h2>Title</h2>
          <input
            className='inputs'
            type="text"
            placeholder='Title'
            name='title'
            value={currentBook.title}
            onChange={(event) => { setCurrentBook({ ...currentBook, title: event.target.value }) }}
          />

          <input
            id='author'
            type="text"
            placeholder='Author'
            name='author'
            value={currentBook.author}
            onChange={(event) => { setCurrentBook({ ...currentBook, author: event.target.value }) }}
          />

          <input
            id='genre'
            type="text"
            placeholder='Genre'
            name='genre'
            value={currentBook.genre}
            onChange={(event) => { setCurrentBook({ ...currentBook, genre: event.target.value }) }}
          />

          <input
            id='brief-description'
            type="text"
            placeholder='Brief description'
            name='briefDescription'
            value={currentBook.briefDescription}
            onChange={(event) => { setCurrentBook({ ...currentBook, briefDescription: event.target.value }) }}
          />

          <div className='list'>
            <p>{currentBook.title}</p>
            <p>{currentBook.author}</p>
            <p>{currentBook.genre}</p>
            <p>{currentBook.briefDescription}</p>
          </div>
        </form>
        <button onClick={onSubmit}>Save to list</button>
        {list.map((book)=>
         <div className='list'>
         <p>{book.title}</p>
         <p>{book.author}</p>
         <p>{book.genre}</p>
         <p>{book.briefDescription}</p>
       </div>
         )}
        
      </>
    )
  }

  export default ReadingList
