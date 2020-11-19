import styled from "styled-components";
import {device} from "./Device"

const DivFooter = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #efdcbe;
text-decoration: none;
color : white;
text-shadow: 1px 1px 2px black;
font-size: 2vh;
height: 12vh;
@media ${device.mobile} {
    font-size: 2vh;
    
}

`
const A = styled.a`
  text-decoration: none;
  color : white;
  &:hover{
    color:black;
    transition: 0.6s;}
`

export const ImgBan = styled.img`
height: 5vh;
background-repeat: repeat;
width: 100%;
background-color: rgba(239, 220, 190, 0.29);
`

export default function Footer(){
    return <div>
        <ImgBan src="/images/banniere.png" alt="banniere"/>
    <DivFooter>
        <A href="#1">Safety instructions</A>
        <A href="#2">FAQ</A>
        <A href="#3">Contact Us</A>
    </DivFooter>
    </div>
}