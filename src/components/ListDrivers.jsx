import FrontPage from "./FrontPage";
import styled from "styled-components";

const ImageDuHaut = styled.img`
  width: 100%;
  box-shadow: 3px 5px 5px #797474;
`;

const H1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  background-color: #fcf6ee;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;

const ListDrivers = ({ profile }) => {
  return (
    <div>
      <ImageDuHaut src="/photos/charTableau.jpg" alt="Course de char" />
      <H1>Avaibles trips</H1>
      {profile.map((item) => (
        <FrontPage key={item.id} profile={item} />
      ))}
    </div>
  );
};

export default ListDrivers;
