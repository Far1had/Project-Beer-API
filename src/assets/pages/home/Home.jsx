import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';

const Home = () => {
  return (
    <>
      {/* <Nav /> */}
      <div>
        <Link to="/AllBeers">
          <h2>All Beers</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, recusandae?</p>
      </div>
      <div>
        <Link to="/RandomBeers">
          <h2>Random Beer</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, similique.</p>
      </div>
    </>
  );
}

export default Home;
