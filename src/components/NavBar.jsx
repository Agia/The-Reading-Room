import React from 'react'
import { NavLink } from 'react-router-dom';
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
      <NavLink className='linkstyle' to="/" element={<Home/>}>Home</NavLink>
      <NavLink className='linkstyle' to="/readinglist" element={<ReadingList/>}>Reading List</NavLink>
      <NavLink className='linkstyle' to="/booknotes" element={<BookNote/>}>Book Notes</NavLink>
    </LinkContainer>
  )
}

export default NavBar;