import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card';
import Nav from '../../components/Nav';

const RandomBeers = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setRandomBeer(response.data);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

  return (
    <>
      <Nav />
      <Link to="/">
        <p>Zurück zur Startseite</p>
      </Link>
      <h1>Random Beer</h1>
      {randomBeer && <Card beer={randomBeer} />}
    </>
  );
}

export default RandomBeers;
