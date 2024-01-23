import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ beer }) => {
  return (
    <div>
      <Link to={`/beers/${beer.id}`}>
        <img src={beer.image_url} alt={beer.name} />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>Contributed by: {beer.contributed_by}</p>
      </Link>
    </div>
  );
};

export default Card;
