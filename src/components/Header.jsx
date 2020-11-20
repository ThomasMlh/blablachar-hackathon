import styled from "styled-components";
import { device } from "./Device";
import { Link } from "react-router-dom";

export const DivHeader = styled.div`
  background-color: #efdcbe;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 4vh;
  text-shadow: 1px 1px 2px black;
  height: 12vh;
  @media ${device.mobile} {
    height: 15vh;
    font-size: 17px;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  padding-right: 18vw;
  @media ${device.mobile} {
    padding-right: 0vw;
  }
`;

export const ImgLogo = styled.img`
  height: 20vh;
  @media ${device.mobile} {
    height: 12vh;
    width: 12vh;
  }
`;

export const A = styled(Link)`
  text-decoration: none;
  padding-right: 3vw;
  color: white;
  &:hover {
    color: black;
    transition: 0.6s;
  }
  @media ${device.mobile} {
    padding-right: 0vw;
  }
`;

export const PLogo = styled.p`

text-align: center;
padding-top: 3vh;
font-size: 10vh;
padding-left: 2vh;
@media ${device.mobile} {
display: none    }

`
export const PDescription = styled.p`
  text-align: center;
  font-size: 25px;
  @media ${device.mobile} {
    display: none;
  }
`;

export const ImgBan = styled.img`
  height: 5vh;
  background-repeat: repeat;
  width: 100%;
  background-color: rgba(239, 220, 190, 0.29);
`;

export const BLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default function Header() {
  return (
    <div>
      <DivHeader>
        <DivLogo>
          <Link to="/">
            <ImgLogo src="/images/logo.png" alt="logo" />
          </Link>
          <section>
          <BLink to="/">
          <PLogo>BlaBlaChar
          <PDescription>“The best way to travel around Athens”</PDescription>
          </PLogo>
          </BLink>
          </section>
        </DivLogo>
        <A to="post">Post a trip</A>
        <A to="chariots">Chariots</A>
      </DivHeader>
      <div>
        <ImgBan src="/images/banniere.png" alt="banniere" />
      </div>
    </div>
  );
}
