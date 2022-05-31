import React from "react";
import './nav.css';
import {AiOutlineHome}  from 'react-icons/ai';
import {BiBookBookmark} from 'react-icons/bi';
import {FiSmartphone} from 'react-icons/fi';
import {BiCodeBlock} from 'react-icons/bi';
import {RiGalleryLine} from 'react-icons/ri';

function Nav() {
  return (
    <main>

    <nav>
      <a href="#home"><AiOutlineHome /></a>
      <a href="#about"><BiCodeBlock /></a>
      <a href="#certificates"><RiGalleryLine /></a>
      <a href="#formation"><BiBookBookmark /></a>
      <a href="#footer"><FiSmartphone /></a>
    </nav>

    </main>
  );
}

export default Nav;