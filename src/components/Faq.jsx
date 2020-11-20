import styled from "styled-components";

const Div = styled.div`
  background-color: rgba(239, 220, 190, 0.29);
  text-align: center;
  height: 66.5vh;
`;

const H1 = styled.h1`
  font-size: 3vh;
  padding-top: 2vh;
  font-weight: bold;
  font-family: cinzel decorative;
`;

const H2 = styled.h2`
  font-size: 2.3vh;
  padding-top: 2.6vh;
  text-decoration: underline;
  font-family: cinzel decorative;
`;

const P = styled.p`
  padding-top: 1vh;
  font-size: 2.4vh;
`;
const Img = styled.img`
height: 35vh;
`
export default function Faq() {
  return (
    <Div>
      <H1>FAQ</H1>
      <section>
        <H2>How can i have my profil on Blablachar ?</H2>
        <P>
          Internet is not born yet (like JC), you have to send us a marble
          tablet with your description. We will add it as soon as possible.
        </P>
        <P>Adress : Behind The Moussaka's shop. Ask Tibulle. </P>
      </section>
      <section>
        <H2>How can i reserv a travel ?</H2>
        <P>Send us a marble tablet in the "Contact us" section.</P>
      </section>
      <section>
        <H2>How can i  post a trip ?</H2>
        <P>In "Post a trip" section, dumbass...</P>
      </section>
      <section>
        <Img src="/images/scrib.png" alt=""/>
      </section>
    </Div>
  );
}
