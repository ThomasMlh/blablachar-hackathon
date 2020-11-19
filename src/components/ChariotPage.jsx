import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CharriotCard from './components/CharriotCard';

const url = "https://still-ravine-63028.herokuapp.com/profiles/"

export default function ChariotList () {
  const [ charList, setCharList ] = useState([]);
  const [ bestRating, setbestRating ] = useState(false);

  useEffect(() => {
    fetchChar();
  }, [charList]);

  const fetchChar = () => {
    axios.get(url)
    .then(res => setCharList(res.data));
  };

  const handleBestRating = () => {
    setbestRating(!bestRating);
};
  return (
    <>
      <button onClick={handleBestRating}>{bestRating ? "Best Games" : "All Games"}</button>
      <div>
      {charList
      .filter((char) => {
        return !bestRating || (char.rating) > 4.0
      })
      .map(({id, name, image, horse, speed, releaseYear, rating}) => {
      return <CharriotCard
      key={id} 
      id={id} 
      name={name} 
      image={image}
      horse={horse}
      speed={speed} 
      releaseYear={releaseYear}
      rating={rating}
      />
      })};
      </div>
    </>
  );
}
