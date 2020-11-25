import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { device } from "./Device";

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
  @media ${device.mobile} {
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
  @media ${device.mobile} {
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

const Description = styled.div`
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
  margin-left: 5vw;
  margin-top: 2em;
  font-weight: bold;
  font-size: 0.8em;
  font-family: Cinzel Decorative;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin-left: 4vw;
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
  const { id } = useParams();
  const myId = id;
  const [profileInfo, setProfileInfo] = useState([]);

  const getUniqueProfile = async () => {
    try {
      const { data } = await axios.get(
        `https://still-ravine-63028.herokuapp.com/profiles/${myId}`
      );
      setProfileInfo(data);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [comment, setComment] = useState({
    name: "",
    comment: "",
  });

  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    //On récupère les valeurs de comment, qu'on met dans une key myValueInLocalStorage, on doit le mettre en string sinon il prend pas
    e.preventDefault();
    localStorage.setItem(
      "myValueInLocalStorage",
      JSON.stringify([...comments, comment])
    );
    setComments([...comments, comment]);
  };

  useEffect(() => {
    //on repasse les données en tableau, et si ya qqchose on affiche, si ya rien, tableau vide
    setComments(
      JSON.parse(localStorage.getItem("myValueInLocalStorage")) || []
    );
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getUniqueProfile();
  }, []);

  return (
    <Component>
      <ProfilInfo>
        <UserMainInfo>
          <UserImg src={profileInfo.profile_image} alt="" />
          <UserDescr>
            <DriverName>{profileInfo.name}</DriverName>
            <p>
              Rating : {profileInfo.rate} <span>&#11088;</span>
            </p>
            <p>Chariot : {profileInfo.char_model}</p>
            <p>Age : {profileInfo.age}</p>
            <p>Trips made : {profileInfo.number_routes}</p>
            <p>Trips achieved : {profileInfo.arrived_at_destination}</p>
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
            <TextDescr>{profileInfo.description}</TextDescr>
          </Description>
        </UserSecondInfo>
      </ProfilInfo>
      <Title>Comments</Title>
      <Comments>
        {comments.map((comm) => {
          return (
            <Com>
              {comm.comment} - {comm.name}
            </Com>
          );
        })}
      </Comments>
      <div>
        <SndTitle>Leave a comment</SndTitle>
        <StyledForm>
          <label>
            <StyledInput
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Your name"
            />
          </label>
          <label>
            <StyledTextarea
              onChange={handleChange}
              id="comment"
              placeholder="Leave a comment..."
            ></StyledTextarea>
          </label>
          <StyledButton type="submit" value="Post" onClick={handleSubmit}>
            Post
          </StyledButton>
        </StyledForm>
      </div>
    </Component>
  );
}
