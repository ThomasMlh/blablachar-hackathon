import "../reset.css";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PageTrip = styled.div`
  width: 100%;
  margin-top: 4vh;
`;

const Card = styled.div`
  background: rgb(255, 245, 230);
  width: 90%;
  height: 90%;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(
    0deg,
    rgba(255, 245, 230, 1) 0%,
    rgba(249, 221, 165, 0.7637255585828081) 100%
  );
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
  padding-left: 0.5vw;
`;

const Details = styled.div`
  margin-top: 2vh;
`;

const ButtonDetails = styled.button`
  background-color: #11ffee00;
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
  width: 15vw;
  margin-top: 4vh;
  margin-bottom: 4vh;
  border-radius: 20px;
  border: solid black;
`;

const Description = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const Trajet = styled.div`
  display: flex;
  flex-direction: column;
`;

const From = styled.h2`
  font-size: 1.4em;
  font-family: Cinzel decorative;
`;

const To = styled.h2`
  font-size: 1.4em;
  font-family: Cinzel decorative;
`;

const Date = styled.h2`
  margin-top: 4vh;
  font-size: 1em;
`;

const Driver = styled.h3`
  font-size: 1em;
  margin-top: 4vh;
`;

const Price = styled.h3`
  margin-top: 2vh;
  font-size: 1em;
`;

const PlaceNumber = styled.div`
  margin-top: 2vh;
  font-size: 1em;
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

const DetailsAlacon = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Trait2 = styled.div`
  background-color: #292828;
  height: 1px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;
`;

const DetailCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0vw;
`;

const ChariotModel = styled.h3`
  font-size: 1.3em;
`;

const Lugage = styled.h3`
  margin-top: 4vh;
  font-size: 1.3em;
`;

const ImageChariot = styled.img`
  width: 15vw;
  margin-left: 1.2vw;
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
    <PageTrip>
      <Card>
        <CardContent>
          <Link
            to={{ pathname: `drivers/${profile.id}`, state: { info: profile } }}
          >
            <ImageProfil
              src={`https://still-ravine-63028.herokuapp.com${profile.profile_image[0].url}`}
              alt="maximus"
            />
          </Link>
          <Description>
            <Trajet>
              <From>From : {profile.departure} </From>
              <To>To : {profile.arrival}</To>
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
          <DetailsAlacon>
            <Trait2></Trait2>
            <DetailsCard>
              <DetailCardContent>
                <ChariotModel>
                  Chariot model : {profile.char_model}
                </ChariotModel>
                <Lugage>Luggage : {profile.luggage}</Lugage>
              </DetailCardContent>
              <ImageChariot
                src={`https://still-ravine-63028.herokuapp.com${profile.char_image[0].url}`}
                alt="maximus"
              />
            </DetailsCard>
          </DetailsAlacon>
        ) : (
          ""
        )}
      </Card>
    </PageTrip>
  );
}
