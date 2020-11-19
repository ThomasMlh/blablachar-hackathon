import styled from "styled-components";

const Component = styled.div`
  background-color: #fbf7ef;
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
  width: 20vw;
`;

const UserDescr = styled.div`
  margin-left: 2em;
  width: 60vw;
`;

const UserSecondInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Personality = styled.ul`
  list-style-type: none;
  background-color: #faeed1;
  text-align: center;
  width: 20vw;
  height: 20vh;
`;

const Description = styled.div`
  width: 60vw;
  height: 20vh;
  background-color: #faeed1;
  text-align: center;
`;

const Title = styled.h1`
  margin-left: 2em;
`;

const Comments = styled.div`
  text-align: justify;
  margin: 0 2em;
`;

const SndTitle = styled.h2`
  margin-left: 3em;
`;

const LeaveCom = styled.div``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 10vw;
  margin-left: 4em;
`;

const StyledInput = styled.input`
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #fbf7ef;
  padding-left: 5px;
  outline: none;
  margin: 1em 0;
`;

const StyledTextarea = styled.textarea`
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #fbf7ef;
  padding-left: 5px;
  outline: none;
  width: 50vw;
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
  return (
    <Component>
      <ProfilInfo>
        <UserMainInfo>
          <UserImg
            src="https://www.geekasia.com/wp-content/uploads/mona_lisa_chuck_norris.jpg"
            alt=""
          />
          <UserDescr>
            <h1>Chuck Norris</h1>
            <p>
              Rating : 5.0 <span>&#11088;</span>
            </p>
            <p>Chariot : Zeus 8</p>
            <p>Age : 152 ans</p>
            <p>Trips made : 14</p>
            <p>Trips achieved : 14</p>
          </UserDescr>
        </UserMainInfo>
        <UserSecondInfo>
          <Personality>
            <li>Moderate Alcoholic</li>
            <li>Drive hands free</li>
            <li>Chatty</li>
          </Personality>
          <Description>
            <p>Description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Description>
        </UserSecondInfo>
      </ProfilInfo>
      <Title>Comments</Title>
      <Comments>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua." - TONTON
          TOTO
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua." - TATA
          YOYO
        </p>
      </Comments>
      <LeaveCom>
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
      </LeaveCom>
    </Component>
  );
}
