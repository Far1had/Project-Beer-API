import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/AllBeers">All Beers</Link>
        </li>
        <li>
          <Link to="/RandomBeers">Random Beer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
