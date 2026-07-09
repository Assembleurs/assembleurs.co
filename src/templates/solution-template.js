import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Seo } from "../components/seo";

/*Components*/
import Navbar from "../components/sections/navbar";
import Header from "../components/sections/header";
import SectionWrap from "../components/sections/section-wrap";
import Footer from "../components/sections/footer";

/*Styles*/
const Main = styled.div``;
const Wrapper = styled.section`
  width: 60%;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const CertifBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const CertifLink = styled.a`
  display: inline-block;
  font-family: "Big Shoulders Display", cursive;
  font-weight: 600;
  font-size: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #ff4114;
  border: 2px solid #ff4114;
  border-radius: 8px;
  padding: 12px 28px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: transparent;
    color: #ff4114;
  }
`;

const SolutionMarkdown = styled(ReactMarkdown)`
  h2 {
    text-transform: none;
    letter-spacing: 0.5px;
  }
  a {
    color: #ff4114;
    text-decoration: underline;
    font-weight: 600;
  }
  img {
    width: 100%;
    padding: 50px 0px;
  }
`;

export const query = graphql`
  query ($slug: String!) {
    strapiSolution(slug: { eq: $slug }) {
      slug
      content {
        data {
          content
        }
      }
      title
      accroche
    }
  }
`;

const SolutionTemplate = (props) => {
  return (
    <body>
      <Main>
        <GlobalStyle />
        <Navbar />
        <Header
          titleText={props.data.strapiSolution.title}
          contentText={props.data.strapiSolution.accroche}
        />
        <Wrapper>
          <SectionWrap>
            {props.data.strapiSolution.content.data.content && (
              <SolutionMarkdown>
                {props.data.strapiSolution.content.data.content}
              </SolutionMarkdown>
            )}
            {props.data.strapiSolution.slug === "catalogue-de-formation-a-destination-des-mediateurs-et-conseillers-numeriques" && (
              <CertifBox>
                <CertifLink
                  href="/certificat_qualiopi_les_assembleurs.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulter notre certificat Qualiopi
                </CertifLink>
              </CertifBox>
            )}
          </SectionWrap>
        </Wrapper>
        <Footer />
      </Main>
    </body>
  );
};

export default SolutionTemplate;

export const Head = (props) => (
  <Seo
    title={`Les Assembleurs - ${props.data.strapiSolution.title}`}
    pathname={`/solutions/${props.data.strapiSolution.slug}`}
  ></Seo>
);