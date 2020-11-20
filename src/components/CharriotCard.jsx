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
    width: 90%;
    height: 280px;
    border: 1px solid #f8f8f8;
    border-radius: 1rem;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    font-size: 1.2rem;
    font-family:  "cinzel decorative";
    color:black;
    background: linear-gradient(
    0deg,
    rgba(255, 245, 230, 1) 0%,
    rgba(249, 221, 165, 0.7637255585828081) 100%
    );
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    @media ${device.mobile} {
    flex-direction: column; 
    width: 100vw;
    height: 550px;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
       }`;

const Char=styled.img`
    display: flex;
    width: 40%;
    height: 100%;
    border-radius: 1rem;
    border: solid 2px black;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    &:hover {
        -webkit-filter: sepia(100%);
	filter: sepia(100%);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    }
    @media ${device.mobile} { 
    width: 290px;
    height: 550px;
    justify-content: center;
    align-items: center;
       }`;

const Blockquote=styled.blockquote`
    margin: 1rem 0;
    margin-bottom: 20px;
    font-weight: bold;
    font-family: "cinzel decorative";
    font-size: 1.8em;
    @media ${device.mobile} {
    text-align: center;
    font-size: 1.2em;
       }`;

const Col1=styled.div`
    margin-top: 2px;
    width: 350px;
    height: 280px;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media ${device.mobile} {
    width: 200px;
    line-height: 15px;
       }`;

const StarIcon=styled.div`
    font-size: 1.2rem;
    color: rgb(245,197,24);
    padding-right: 25px;
    margin-top: 40px;
    @media ${device.mobile} {
    text-align: center;
    font-size: 1.5em;
       }`;

const Description=styled.div`
    @media ${device.mobile} {
    text-align: center;
    font-size: 0.8em;
       }`;

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

export default function CharriotCard ({id, model, horses, speed, rate, luggage, handleClick, image}) {
    return (
        <GameCard>
            <Char src={`https://still-ravine-63028.herokuapp.com${image[0].url}`} alt={model} />
            <figcaption>
                <Col1>
                    <Blockquote>{model}</Blockquote>
                    <Description>
                        <h2>{horses} horses</h2>
                        <p><strong>Top Speed on paved: </strong>{speed} km/h</p>
                        <p><strong>Luggage:</strong> {luggage}</p>
                        <StarIcon><FontAwesomeIcon icon={faStar}/>  rating {rate}</StarIcon>
                        <StyledButton id={id} onClick={handleClick}>Remove from my List</StyledButton>
                    </Description>       
                </Col1>
            </figcaption>
        </GameCard>
    )
}