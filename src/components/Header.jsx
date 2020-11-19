import styled from "styled-components";

export const DivHeader = styled.div`
  background-color: #efdcbe;
  display: flex;
  justify-content : space-around;
  align-items: center;
  color : white;
  font-size: 4vh;
  text-decoration: none;
  text-shadow: 1px 1px 2px black;
`;

export const DivLogo = styled.div`
display : flex;
padding-right: 18vw;

`;
export const ImgLogo = styled.img`
height: 20vh;`

export const A = styled.a`
text-decoration: none;
color : white;
&:hover{
    color:black;
    transition: 0.6s;
}
`

export const PLogo = styled.p`
text-align: center;
font-size: 4vh;
padding-left: 2vh;
`
export const PDescription = styled.p`
text-align: center;
font-size: 25px;
`

export const ImgBan = styled.img`
height: 5vh;
background-repeat: repeat;
width: 100%;
background-color: rgba(239, 220, 190, 0.29);
`


export default function Header() {
  return <div>
  <DivHeader>

      <DivLogo>
          <a href="#3"><ImgLogo src="/images/logo.png" alt="logo"/></a>
          <section>
          <PLogo>Blablachar
          <PDescription>“Le tour de Rome en un éclair”</PDescription>
          </PLogo>
          </section>
      </DivLogo>
      <A href="#1">Trajets</A>
      <A href="#2">Poster un trajet</A>
      
        
  </DivHeader>
  <div>
  <ImgBan src="/images/banniere.png" alt="banniere"/>
  </div>
  </div>;
}
