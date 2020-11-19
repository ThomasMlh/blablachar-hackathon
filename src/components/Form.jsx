import styled from "styled-components";
import React, { Component } from "react";

const Div = styled.div`
  background-color: rgba(239, 220, 190, 0.29);
  height: 74vh;
  text-align: center;
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Formulaire = styled.form`
  background-color: rgba(228, 200, 155, 0.29);
  border: solid;
  border-radius: 8px;
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const DivLabel = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
  width: 100%;
  text-align: start;
`;

const Label = styled.label`
  color: white;
  text-shadow: 1px 1px 2px black;
  display: inline-block;
  margin-right: 10px;
  width: 30%;
`;

const Input = styled.input`
  padding-left: 10%;
  width: 50%;
`;
const Select = styled.select`
  padding-left: 10%;
  width: 61%;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 0 20px;
  border: none;
  background: #e9c47b;
  color: white;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  height: 4vh;
  border-radius: 5px;
  margin: 1em 0;
  &:hover {
    background: #fbf7ef;
    color: #e9c47b;
    border: 2px solid #e9c47b;
    cursor: pointer;
  }
`;

const place = [];
  for (let i = 1; i < 6; i += 1) {
    place.push(
      <option value={i * 6} key={i}>
        {i}
      </option>
    );
  }

  const luggage = [];
  for (let i = 1; i < 6; i += 1) {
    luggage.push(
      <option value={i * 6} key={i}>
        {i}
      </option>
    );
  }

  const day = [];
  for (let i = 1; i < 32; i += 1) {
    day.push(
      <option value={i * 32} key={i}>
        {i}
      </option>
    );
  }

  export default class Form extends Component {
  constructor(props){
    super(props);
  }
  
render(){
  return (
    <Div>
      <h1>Post your trip</h1>
      <div>
        <Formulaire action="">
          <fieldset>
            <DivLabel>
              <Label for="name">Name :</Label>
              <Input type="text" name="name" id="name" />
            </DivLabel>
            <DivLabel>
              <Label for="trip">Departure:</Label>
              <Input type="text" name="trip" id="trip" />
            </DivLabel>
            <DivLabel>
              <Label for="trip">Arrival :</Label>
              <Input type="text" name="trip" id="trip" />
            </DivLabel>
            <DivLabel>
              <Label for="start">Choose Day :</Label>
              <Select name="start" id="start">
                {day}
              </Select>
            </DivLabel>
            <DivLabel>
            <Label for="start">Choose Month :</Label>
            <Select name="month" id="month">
                <option value="Hécatombéion">Hécatombéion</option>
                <option value="Metageitnion">Metageitnion</option>
                <option value="Béodromion">Béodromion</option>
                <option value="Pyanepsion">Pyanepsion</option>
                <option value="Maimaiterion">Maimaiterion</option>
                <option value="Poséidéon">Poséidéon</option>
                <option value="Gamelion">Gamelion</option>
                <option value="Anthestérion">Anthestérion</option>
                <option value="Elaphébolion">Elaphébolion</option>
                <option value="Mounikion">Mounikion</option>
                <option value="Thargélion">Thargélion</option>
                <option value="Scirophoron">Scirophoron</option>
              </Select>
            </DivLabel>
            <DivLabel>
              <Label for="price">Price :</Label>
              <Input type="text" name="price" id="price" />
            </DivLabel>
            <DivLabel>
              <Label for="place-select">Place :</Label>
              <Select name="place-select" id="place-select">
                {place}
              </Select>
            </DivLabel>
            <DivLabel>
              <Label for="luggage">Luggage :</Label>
              <Select name="luggage" id="luggage">
                {luggage}
              </Select>
            </DivLabel>
            <DivLabel>
              <Label for="chariot">Chariot :</Label>
              <Input type="text" name="chariot" id="chariot" />
            </DivLabel>
            <DivLabel>
              <Label for="user_photo">User photo :</Label>
              <Input type="text" name="user_photo" id="user_photo" />
            </DivLabel>
            <DivLabel>
              <Label for="user_chariot">Chariot picture :</Label>
              <Input type="text" name="user_chariot" id="user_chariot" />
            </DivLabel>
            <StyledButton>Validate</StyledButton>
          </fieldset>
        </Formulaire>
      </div>
    </Div>
  );
}
}