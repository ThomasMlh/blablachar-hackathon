import styled from "styled-components";
import { device } from "./Device";
import React, { Component } from "react";

const Div = styled.div`
  background-color: rgba(239, 220, 190, 0.29);
  height: 74vh;
  text-align: center;
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.mobile} {
    height: 80.2vh
  }
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
  height: 43vh;
  @media ${device.mobile} {
  height: 47vh;
  width: 45vh;
  
  }
  
`;

const DivLabel = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
  width: 100%;
  text-align: start;
  height: 2.7vh;
  @media ${device.mobile} {

  }
`;

const H1 = styled.h1`
  color: white;
  margin-bottom: 3vh;
  font-size : 8vh;
  text-shadow: 1px 1px 2px black;
  @media ${device.mobile} {
    font-size: 4vh;
    padding-top: 4vh
  }
`;

const Label = styled.label`
  color: white;
  text-shadow: 1px 1px 2px black;
  display: inline-block;
  margin-right: 10px;
  width: 30%;
  @media ${device.mobile} {
  height: 3vh;
  width:14vh;
  }
`;

const Input = styled.input`
  width: 50%;
  text-align: center;


`;

const Select = styled.select`
  width: 51%;
  text-align: center;

`;

const StyledButton = styled.input`
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
  @media ${device.mobile} {
  margin : 1vh 0 ;
}

`;

const place = [];
  for (let i = 1; i < 6; i += 1) {
    place.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const luggage = [];
  for (let i = 1; i < 6; i += 1) {
    luggage.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const day = [];
  for (let i = 1; i < 32; i += 1) {
    day.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name :"",
      char_model:"",
      departure:"",
      arrival:"",
      price: 0,
      seats: 0,
      luggage: 0,
      day_departure:"",
      month_departure:"",
      char_image :"",
      profile_image : ""
    }
  }



  onChange = (e) =>{
    switch(e.target.name) {
    
      default:
        this.setState({
          [e.target.name] : e.target.value
        });
    }
  };

  
  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.tablo.push(this.state)
  };



render(){
  

  return (
    <Div>
      <H1>Post your trip</H1>
      <div>
        <Formulaire onSubmit={this.submitForm}>
          <fieldset>
            <DivLabel>
              <Label htmlFor="name">Name :</Label>
              <Input type="text" name="name" id="name" placeholder="Cratos" onChange={this.onChange} value={this.state.name} />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="departure">Departure:</Label>
              <Input type="text" name="departure" id="departure" placeholder="Delphes"onChange={this.onChange} value={this.state.departure}/>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="arrival">Arrival :</Label>
              <Input type="text" name="arrival" id="arrival" placeholder="Sparte" onChange={this.onChange} value={this.state.arrival}/>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="day_departure">Choose Day :</Label>
              <Select name="day_departure" id="day_departure" onChange={this.onChange} value={this.state.day_departure}>
                <option value="" selected disabled hidden>Choose day</option>
                {day}
              </Select>
            </DivLabel>
            <DivLabel>
            <Label htmlFor="month_departure">Choose Month :</Label>
            <Select  type="text" name="month_departure" id="month_departure" onChange={this.onChange} value={this.state.month_departure}>
                <option value="" selected disabled hidden> Choose month</option>
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
              <Label htmlFor="price" >Price :</Label>
              <Input type="number" name="price" id="price" placeholder="12 oboles" onChange={this.onChange} value={this.state.price} />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="seats" >Place :</Label>
              <Select type="number" name="seats" id="seats" onChange={this.onChange} value={this.state.seats}>
                {place}
              </Select>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="luggage">Luggage :</Label>
              <Select type="number" name="luggage" id="luggage" onChange={this.onChange} value={this.state.luggage}>
                {luggage}
              </Select>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="char_model">Chariot :</Label>
              <Input type="text" name="char_model" id="char_model" placeholder="Zeus 8" onChange={this.onChange} value={this.state.char_model} />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="char_image">Chariot Picture :</Label>
              <Select type="text" name="char_image" id="char_image" onChange={this.onChange} value={this.state.char_image}>
              <option value="" selected disabled hidden>Choose chariot image</option>   
              <option value="https://still-ravine-63028.herokuapp.com/uploads/Dyonisos_50_8b5c45076c.jpg">Chariot 1</option>             
              </Select>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="profile_image">User photo :</Label>
              <Select type="img" name="profile_image" id="profile_image" onChange={this.onChange} value={this.state.profile_image}>
              <option value="" selected disabled hidden>Choose profil image</option>   
              <option value="https://still-ravine-63028.herokuapp.com/uploads/Joris_3f0cf76d67.jpeg">Joris</option>          
              </Select>
            </DivLabel>
            <StyledButton type="submit" value="Send" />
          </fieldset>
        </Formulaire>
      </div>
    </Div>
  );
}
}