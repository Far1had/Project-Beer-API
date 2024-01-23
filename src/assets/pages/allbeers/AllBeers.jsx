import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BeerList from '../../components/BeerList';
import Nav from '../../components/Nav';

const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <>
      <Nav />
      <Link to="/">
        <p>Zurück zur Startseite</p>
      </Link>
      <h1>All Beers</h1>
      <BeerList beers={beers} />
    </>
  );
}

export default AllBeers;
