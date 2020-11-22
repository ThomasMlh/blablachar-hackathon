import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CharriotCard from "./CharriotCard";
import styled from "styled-components";
import { device } from "./Device";

const Charcontainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

//auto-fill wrap auto if no space available
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  column-gap: 1em;
  row-gap: 2em;
  width: 100%;
  margin-top: 0 auto;
`;

const BannChar = styled.img`
  width: 100%;
  height: 35em;
  margin-top: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  @media ${device.mobile} {
    width: 100%;
    height: 30vh;
  }
`;

const StyledButton = styled.button`
  padding: 0 20px;
  border: none;
  background: #e9c47b;
  color: white;
  letter-spacing: 4px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  font-size: 25px;
  height: 6vh;
  border-radius: 5px;
  margin: 1em 0;
  &:hover {
    background: #fbf7ef;
    color: #e9c47b;
    border: 2px solid #e9c47b;
    cursor: pointer;
  }
  @media ${device.mobile} {
    height: 10%;
    font-size: 15px;
    width: 90vw;
    transition: none;
  }
`;

const url = "https://still-ravine-63028.herokuapp.com/char-infos";

export default function ChariotList() {
  const [charList, setCharList] = useState([]);
  const [bestRating, setbestRating] = useState(false);

  const fetchChar = () => {
    axios.get(url).then((res) => setCharList(res.data));
  };

  useEffect(() => {
    fetchChar();
  }, []);

  const handleClick = (e) => {
    const tempList = [...charList];
    const index = tempList.findIndex(
      (item) => item.id === parseInt(e.target.id)
    );
    const remove = window.confirm(
      "You want to remove this char from the list?"
    );
    if (remove) {
      tempList.splice(index, 1);
      setCharList(tempList);
    }
  };

  const handleBestRating = () => {
    setbestRating(!bestRating);
  };

  return (
    <div>
      <BannChar src={"./Photos/Bannierechar.jpg"} alt={""} />
      <Charcontainer>
        <StyledButton onClick={handleBestRating}>
          {bestRating ? "Best Chars" : "All Chars"}
        </StyledButton>
        <Wrapper>
          {charList
            .filter((char) => {
              return !bestRating || char.rate > 3.8;
            })
            .map(({ id, model, horses, speed, rate, luggage, image }) => {
              return (
                <CharriotCard
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
              );
            })}
        </Wrapper>
      </Charcontainer>
    </div>
  );
}
