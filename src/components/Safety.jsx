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

export default function Safety() {
  return (
    <Div>
      <H1>Safty tips for drivers</H1>
      <section>
        <H2>Avoid being too drunk on the road</H2>
        <P>You might get to Rome ...</P>
      </section>
      <section>
        <H2>Don't forget your passengers</H2>
        <P>Paymant is made on arrival (better alive).</P>
      </section>
      <section>
        <H2>Watch out for lion</H2>
        <P>They run faster than horses.</P>
      </section>
      <section>
        <H2>Don't use TikTok while driving</H2>
        <P>Because TikTok sucks. </P>
      </section>
      <section>
        <H2>
          Be carrefull with old people on the road (they might be your father)
        </H2>
        <P>It would be such a shame to damage your wheels.</P>
      </section>
      <section>
        <H2>Feed your animals often</H2>
        <P>A good advice if you want to finish the road on foot.</P>
      </section>
      <section>
        <H2>Have the tire pressure checked</H2>
        <P>It's 2.1 bar for heavy chariot and 2.3 var for light chariot.</P>
      </section>
    </Div>
  );
}
