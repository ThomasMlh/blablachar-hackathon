import styled from "styled-components";
import {device} from "./Device"
import {Link} from "react-router-dom"

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
margin-top: -11px;
@media ${device.mobile} {
    font-size: 2vh;
    
}

`
const A = styled(Link)`
  text-decoration: none;
  color : white;
  &:hover{
    color:black;
    transition: 0.6s;}
`

const Alink = styled.a`
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
        <A to="safety">Safety instructions</A>
        <A to="faq">FAQ</A>
        <Alink href="https://lapierreetlemarbre.com/vente-en-gros/" target="blank">Contact Us</Alink>
    </DivFooter>
    </div>
}