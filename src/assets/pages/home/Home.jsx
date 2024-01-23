import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import allbeer from "../../../assets/img/allbeer.jpg"
import random from "../../../assets/img/random.png"

const Home = () => {
  return (
    <>
     
      <div>
        <Link to="/AllBeers">
          <img src={allbeer} />

          <h2>All Beers</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, recusandae?</p>
      </div>
      <div>
        <Link to="/RandomBeers">
          <img src={random} />
          <h2>Random Beer</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, similique.</p>
      </div>
    </>
  );
}

export default Home;
