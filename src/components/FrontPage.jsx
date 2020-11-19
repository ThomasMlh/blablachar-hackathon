import "../reset.css";
import styled from "styled-components";
import React, { useState } from "react";

const Page = styled.div`
  display: flex;
  background-color: #fcf6ee;
  height: 100%;
  padding-bottom: 5%;
`;

const Card = styled.div`
  width: 70vw;

  background-color: #fdefcd;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  border: solid #c5b286 1px;
  box-shadow: 3px 5px 5px #797474;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Details = styled.div`
  margin-top: 2vh;
`;

const ButtonDetails = styled.button`
  background-color: #fdefcd;
  color: #3b3a3a;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2.5em;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    font-size: 3em;
    color: black;
  }
`;

const ImageProfil = styled.img`
  width: 25vw;
  margin-left: 2vw;
  margin-top: 4vh;
  margin-bottom: 4vh;
  border-radius: 20px;
  border: solid black;
`;

const Description = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const Trajet = styled.h1`
  font-size: 1.5em;
`;

const Date = styled.h2`
  margin-top: 4vh;
  font-size: 1.3em;
`;

const Driver = styled.h3`
  font-size: 1.2em;
  margin-top: 4vh;
`;

const Price = styled.h3`
  margin-top: 2vh;
  font-size: 1.2em;
`;

const PlaceNumber = styled.div`
  margin-top: 2vh;
  font-size: 1.2em;
`;

const DetailsFav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Fav = styled.div`
  margin-bottom: 2vh;
`;

const IsFavorite = styled.div`
  right: 0;
  align-items: flex-end;
  cursor: pointer;
`;

const Favorite = styled.div`
  width: 3em;
  height: 3em;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg");
  background-size: 100%;
`;

const NotFavorite = styled.div`
  width: 3em;
  height: 3em;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg");
  background-size: 100%;
`;

const DetailsCard = styled.div`
  margin-top: 2vh;
  position: relative;
  padding-left: 4vw;
  padding-right: 13vw;
  margin-bottom: auto;
  background-color: #fdefcd;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
`;

const DetailCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChariotModel = styled.h3`
  font-size: 1.2em;
`;

const Contact = styled.h3`
  margin-top: 4vh;
  font-size: 1.2em;
`;

const Lugage = styled.h3`
  margin-top: 4vh;
  font-size: 1.2em;
`;

const ImageChariot = styled.img`
  width: 25vw;
  margin-left: 2vw;
  margin-top: 4vh;
  margin-bottom: 4vh;
  border-radius: 20px;
  border: solid black;
`;

export default function FrontPage({ profile }) {
  const [favorite, setFavorite] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <Page>
      <Card>
        <CardContent>
          <ImageProfil
            src={`https://still-ravine-63028.herokuapp.com${profile.profile_image[0].url}`}
            alt="maximus"
          />
          <Description>
            <Trajet>
              From : {profile.departure} To : {profile.arrival}
            </Trajet>
            <Date>
              Date : {profile.day_departure} {profile.month_departure}
            </Date>
            <Driver>Charioteer : {profile.name}</Driver>
            <Price>Price : {profile.price} </Price>
            <PlaceNumber>Number of places : {profile.seats}</PlaceNumber>
          </Description>
          <DetailsFav>
            <Details>
              <ButtonDetails onClick={handleDetails}>+</ButtonDetails>
            </Details>
            <Fav>
              <IsFavorite id="favorite" onClick={handleFavorite}>
                {favorite ? <Favorite /> : <NotFavorite />}
              </IsFavorite>
            </Fav>
          </DetailsFav>
        </CardContent>
        {showDetails ? (
          <DetailsCard>
            <ImageChariot
              src={`https://still-ravine-63028.herokuapp.com${profile.char_image[0].url}`}
              alt="maximus"
            />
            <DetailCardContent>
              <ChariotModel>Chariot model : {profile.char_model}</ChariotModel>
              <Lugage>Luggage : {profile.luggage}</Lugage>
              <Contact>Contact the charioteer : ...</Contact>
            </DetailCardContent>
          </DetailsCard>
        ) : (
          ""
        )}
      </Card>
    </Page>
  );
}
