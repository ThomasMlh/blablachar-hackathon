import { useLocation } from "react-router";
import styled from "styled-components";

const Component = styled.div`
  background-color: #fef7e7;
  padding: 2em 1em;
  font-size: 1.3em;
`;

const ProfilInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserMainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserImg = styled.img`
  width: 25vw;
  height: auto;
  margin-bottom: 1em;
  @media (max-width: 800px) {
    width: 60vw;
  }
`;

const UserDescr = styled.div`
  margin-left: 1em;
  width: 60vw;
  line-height: 2em;
`;

const DriverName = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 1em;
  font-family: Cinzel Decorative;
`;

const UserSecondInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoxPersonality = styled.div`
  margin-right: 1em;
  width: 25vw;
  margin-bottom: 1em;
  @media (max-width: 800px) {
    width: 60vw;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  background-color: #faeed1;
  height: 20vh;
  display: flex;
  text-align: center;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5em;
  color: #553318;
  font-family: Cinzel Decorative;
`;

const Description = styled.p`
  width: 60vw;
  height: 20vh;
  background-color: #faeed1;
  margin-bottom: 1em;
`;

const TextDescr = styled.p`
  text-align: justify;
  margin: 1em 1em 0 1em;
`;

const TitleDescr = styled.h4`
  text-align: left;
  margin: 1em 0.5em 0 1em;
  font-family: Cinzel Decorative;
`;

const Title = styled.h1`
  margin: 1em 0 1em 2em;
  font-weight: bold;
  font-size: 1.5em;
  font-family: Cinzel Decorative;
`;

const Comments = styled.div`
  text-align: justify;
  margin: 0 5vw;
  width: 80vw;
`;

const Com = styled.p`
  margin: 1em 0;
  font-size: 0.9em;
  font-style: italic;
  line-height: 1.2em;
`;

const SndTitle = styled.h2`
  margin-left: 5em;
  margin-top: 2em;
  font-weight: bold;
  font-size: 0.8em;
  font-family: Cinzel Decorative;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin-left: 4em;
`;

const StyledInput = styled.input`
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #fbf7ef;
  outline: none;
  margin: 1em 0;
  width: 30vw;
  padding: 0.5em 0 0.5em 5px;
`;

const StyledTextarea = styled.textarea`
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #fbf7ef;
  padding: 0.5em 0 0.5em 5px;
  outline: none;
  width: 70vw;
  height: 10vh;
  resize: none;
`;

const StyledButton = styled.button`
  display: block;
  float: right;
  line-height: 2em;
  padding: 0 20px;
  border: none;
  background: #e9c47b;
  color: white;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  border-radius: 5px;
  margin: 1em 0;
  &:hover {
    background: #fbf7ef;
    color: #e9c47b;
    border: 2px solid #e9c47b;
  }
`;
export default function Drivers() {
  let location = useLocation();
  const info = location.state.info;
  console.log(info);
  return (
    <Component>
      <ProfilInfo>
        <UserMainInfo>
          <UserImg
            src={`https://still-ravine-63028.herokuapp.com${info.profile_image[0].url}`}
            alt=""
          />
          <UserDescr>
            <DriverName>{info.name}</DriverName>
            <p>
              Rating : {info.rate} <span>&#11088;</span>
            </p>
            <p>Chariot : {info.char_model}</p>
            <p>Age : {info.age}</p>
            <p>Trips made : {info.number_routes}</p>
            <p>Trips achieved : {info.arrived_at_destination}</p>
          </UserDescr>
        </UserMainInfo>
        <UserSecondInfo>
          <BoxPersonality>
            <StyledUl>
              <li>Moderate Alcoholic</li>
              <li>Drive hands free</li>
              <li>Chatty</li>
            </StyledUl>
          </BoxPersonality>
          <Description>
            <TitleDescr>Description</TitleDescr>
            <TextDescr>{info.description}</TextDescr>
          </Description>
        </UserSecondInfo>
      </ProfilInfo>
      <Title>Comments</Title>
      <Comments>
        <Com>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua." - TONTON
          TOTO
        </Com>
        <Com>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua." - TATA
          YOYO
        </Com>
      </Comments>
      <div>
        <SndTitle>Leave a comment</SndTitle>
        <StyledForm>
          <label>
            <StyledInput type="text" placeholder="Your name" />
          </label>
          <label>
            <StyledTextarea placeholder="Leave a comment..."></StyledTextarea>
          </label>
          <StyledButton type="submit" value="Post">
            Post
          </StyledButton>
        </StyledForm>
      </div>
    </Component>
  );
}
