import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CharriotCard from './CharriotCard';
import styled from 'styled-components';


const Charcontainer=styled.div`
  display: block;
  padding:2rem;`;

//auto-fill wrap auto if no space available
//  
  const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    column-gap: 1em;
    row-gap: 2em;
    width: 100%;
    margin: 0 auto;
    `;

  const BannChar = styled.img`
      width:100%;
      height:35em;
      `;


const url = "https://still-ravine-63028.herokuapp.com/chars/"

export default function ChariotList () {
  const [ charList, setCharList ] = useState([]);
  const [ bestRating, setbestRating ] = useState(false);

  useEffect(() => {
    fetchChar();
  }, []);

  const handleClick = (e) => {
    const tempCharList = [...charList]
    console.log(tempCharList)
    const index = tempCharList.findIndex(item => item.id === parseInt(e.target.id))
    const remove = window.confirm("You want to remove this char from the list?")
    if (remove) {
        tempCharList.splice(index, 1)
        setCharList(tempCharList)
    }
}

  const fetchChar = () => {
    axios.get(url)
    .then(res => setCharList(res.data));
  };

  const handleBestRating = () => {
    setbestRating(!bestRating);
};
console.log(charList)
  return (
    <div>
      <BannChar src={"./Photos/Bannierechar.jpg"} alt={""}/>
    <Charcontainer>
      <button onClick={handleBestRating}>{bestRating ? "Best Chars" : "All Chars"}</button>
      <Wrapper>
      {charList
      .filter((char) => {
        return !bestRating || (char.rate) > 3.8
      })
      .map(({id, model, horses, speed, rate, luggage, image}) => {
      return <CharriotCard
      key={id} 
      id={id} 
      model={model} 
      horses={horses}
      speed={speed} 
      rate={rate}
      luggage={luggage}
      image={image}
      handleClick={handleClick}
      />
      })};
      </Wrapper>
    </Charcontainer>
    </div>
  );
}
