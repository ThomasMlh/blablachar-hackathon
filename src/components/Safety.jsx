import styled from "styled-components";
 
 const Div = styled.div`
 background-color: rgba(239, 220, 190, 0.29);
 `
const H1 = styled.h1`
font-size: 3vh;
`
const H2 =styled.h2`
font-size : 2.3vh
`

export default function Safety() {
  return (
    <Div>
      <H1>Safty tips for drivers</H1>
      <section>
        <H2>Avoid being too drunk on the road</H2>
        <p>You might get to Rome ...</p>
      </section>
      <section>
        <H2>Don't forget your passengers</H2>
        <p>Paymant is made on arrival (better alive).</p>
      </section>
      <section>
        <H2>Watch out for lion</H2>
        <p>They run faster than horses.</p>
      </section>
      <section>
        <H2>Don't use TikTok while driving</H2>
        <p>Because TikTok sucks. </p>
      </section>
      <section>
        <H2>
          Be carrefull with old people on the road (they might be your father)
        </H2>
        <p>It would be such a shame to damage your wheels.</p>
      </section>
      <section>
        <H2>Feed your animals often</H2>
        <p>A good advice if you want to finish the road on foot.</p>
      </section>
      <section>
        <H2>Have the tire pressure checked</H2>
        <p>It's 2.1 bar for heavy chariot and 2.3 var for light chariot.</p>
      </section>
    </Div>
  );
}
