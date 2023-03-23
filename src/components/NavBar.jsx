import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import ReadingList from './ReadingList';
import BookNote from './BookNote/BookNote';

const LinkContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  background-color: #242424;
  width:100%;
  height:50px;
`;


function NavBar() {
  return (
    <LinkContainer>
      <Link className='linkstyle' to="/" element={<Home/>}>Home</Link>
      <Link className='linkstyle' to="/readinglist" element={<ReadingList/>}>Reading List</Link>
      <Link className='linkstyle' to="/booknotes" element={<BookNote/>}>Book Notes</Link>
    </LinkContainer>
  )
}

export default NavBar;