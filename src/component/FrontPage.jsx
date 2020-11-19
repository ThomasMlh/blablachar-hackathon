import "../reset.css";
import styled from "styled-components";
import React, { useState } from "react";

const Page = styled.div`
  background-color: #fcf6ee;
  height: 100%;
`;

const ImageDuHaut = styled.img`
  width: 100%;
  box-shadow: 3px 5px 5px #797474;
`;

const H1 = styled.h1`
  font-size: 2.5em;
  text-align: left;
  margin-top: 2vh;
  margin-left: 15vw;
`;

const Card = styled.div`
  width: 70vw;

  background-color: #fdefcd;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4vh;
  border-radius: 20px;
  margin-bottom: 10vh;
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
  color: #272626;
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

export default function FrontPage() {
  const [favorite, setFavorite] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <Page>
      <ImageDuHaut src="/photos/charTableau.jpg" alt="Course de char" />
      <H1>Avaibles trips</H1>
      <Card>
        <CardContent>
          <ImageProfil src="/photos/maximus.jpg" alt="maximus" />
          <Description>
            <Trajet>From : ... To : ...</Trajet>
            <Date>Date : ...</Date>
            <Driver>Charioteer : ...</Driver>
            <Price>Price : ... </Price>
            <PlaceNumber>Number of places : ...</PlaceNumber>
          </Description>
          <DetailsFav>
            <Details>
              <ButtonDetails onClick={handleDetails}>+</ButtonDetails>
            </Details>
            <Fav>
              <IsFavorite
                id="favorite"
                onClick={() => {
                  setFavorite(!favorite);
                }}
              >
                {favorite ? <Favorite /> : <NotFavorite />}
              </IsFavorite>
            </Fav>
          </DetailsFav>
        </CardContent>

        {showDetails ? (
          <DetailsCard>
            <ImageChariot src="/photos/maximus.jpg" alt="maximus" />
            <DetailCardContent>
              <ChariotModel>Chariot model : ...</ChariotModel>
              <Lugage>Lugage : ...</Lugage>
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
