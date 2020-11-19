import styled from "styled-components";

const ProfilInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserImg = styled.img`
  width: 20vw;
`;

const UserDescr = styled.div`
  margin-left: 2em;
`;

const Personality = styled.ul`
  list-style-type: none;
`;

const Description = styled.div``;

const Comments = styled.div``;

const LeaveCom = styled.div``;

export default function Drivers() {
  return (
    <div>
      <ProfilInfo>
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
      </ProfilInfo>
      <Comments>
        <h1>Comments :</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. - TONTON
          TOTO
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. - TATA
          YOYO
        </p>
      </Comments>
      <LeaveCom>
        <h1>Add a comment</h1>
        <form>
          <label>
            Name :
            <input type="text" placeholder="Fill your name here" />
            <textarea placeholder="Leave a comment..."></textarea>
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </LeaveCom>
    </div>
  );
}
