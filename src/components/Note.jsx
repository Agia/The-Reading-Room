import React from 'react';
import { Formik, useFormik } from 'formik';
import './Review/style.css';

function Note  () {
  const formik = useFormik({
    initialValues:{
    bookTitle:'',
    author:'',
  },
  onSubmit: values => {
    alert('Saved');
    console.log(values)
  }, 
  });
  return (
    <Formik>
    <div id='review'>
      <h2>Reading List</h2>
      <div className='book-review'>
    <form onSubmit={formik.handleSubmit}>
     <label htmlFor='bookTitle'>Book Title</label>
     <textarea 
     id='bookTitle'
     name='bookTitle'
     type="text"
     onChange={formik.handleChange}
     value={formik.values.bookTitle}
    />
     <button type="submit">Save</button>
    </form>
    
    </div>
     </div>
     </Formik>
  )
}

export default Note