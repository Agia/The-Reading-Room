import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:black;
  width:100%;
  height:50px;
`;


function NavBar() {
  return (
    <LinkContainer>
      <Link className='linkstyle' to="/the-reading-room/">Home</Link>
      <Link className='linkstyle' to="/the-reading-room/notet">Note</Link>
      <Link className='linkstyle' to="/the-reading-room/notes">Notes</Link>
      <Link className='linkstyle' to="/the-reading-room/review">Review</Link>
    </LinkContainer>
  )
}

export default NavBar