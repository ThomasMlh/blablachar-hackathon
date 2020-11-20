import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { device } from './Device';

const GameCard=styled.figure`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-around;
    padding: 1.25em;
    width: 700px;
    height: 250px;
    border: 1px solid #f8f8f8;
    border-radius: 1rem;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    font-size: 1.2rem;
    font-family:  "Sansation";
    color:black;
    background-color:#FAEED1;
    @media ${device.mobile} {
    flex-direction: column; 
    width: 240px;
    height: 450px;
    justify-content: center;
    align-items: center;
       }  
    `;

const Char=styled.img`
    display: flex;
    width: auto;
    height: 250px;
    border-radius: 1rem;
    border: solid 2px black;
    `;

const Blockquote=styled.blockquote`
    margin: 1rem 0;
    font-weight: bold;
    font-family: "Sansation";
    font-size: 1.8em;
    @media ${device.mobile} {
    text-align: center;
    font-size: 1.2em;
       }  
    `;
const COL1=styled.div`
    margin-top: 2px;
    width: 350px;
    height: 280px;
    line-height: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media ${device.mobile} {
    width: 200px;
       } 
    `;

const StarIcon=styled.div`
    font-size: 1.2rem;
    color: rgb(245,197,24);
    padding-right: 25px;
    margin-top: 40px;
    @media ${device.mobile} {
    text-align: center;
    font-size: 1.5em;
       }
    `;

const Description=styled.div`
    @media ${device.mobile} {
    text-align: center;
    font-size: 0.8em;
    
       }  `;

const Rating = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    padding: 10px 10px 10px 10px;
    `;

const RatingLinks = styled.a`
  &:hover {
    color: orange;
    cursor: pointer;
  }`;

export default function CharriotCard ({id, model, horses, speed, rate, luggage, handleClick, image}) {
    return (
        <GameCard>
            <Char src={`https://still-ravine-63028.herokuapp.com${image[0].url}`} alt={model} />
            <figcaption>
                <COL1>
                    <Blockquote>{model}</Blockquote>
                    <Description>
                        <h2>{horses} horses</h2>
                        <p><strong>Top Speed on paved: </strong>{speed} km/h</p>
                        <p><strong>Luggage:</strong> {luggage}</p>
                        <StarIcon><FontAwesomeIcon icon={faStar}/>  rating {rate}</StarIcon>
                        <Rating>
                            <RatingLinks href="#5" title="Donner 5 étoiles">☆</RatingLinks>
                            <RatingLinks href="#4" title="Donner 4 étoiles">☆</RatingLinks>
                            <RatingLinks href="#3" title="Donner 3 étoiles">☆</RatingLinks>
                            <RatingLinks href="#2" title="Donner 2 étoiles">☆</RatingLinks>
                            <RatingLinks href="#1" title="Donner 1 étoile">☆</RatingLinks>
                            </Rating>
                        <button id={id} onClick={handleClick}>remove</button>
                    </Description>       
                </COL1>
            </figcaption>
        </GameCard>
    )
}