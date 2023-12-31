import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import LogoAssembleurs from "../../images/icons/Icone_logo_Assembleurs.png";
import LinkedinLogo from "../../images/icons/Icone_linkedin_red.png";
import TwitterLogo from "../../images/icons/Icone_twitter_red.png";
import JobsLogo from "../../images/icons/Icone_jobs_red.png";
import ContactLogo from "../../images/icons/Icone_contact_red.png";

/*styles*/
const Main = styled.div`
  background-color: #252d80;
  padding: 50px 0px;
`;

const Navbar = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 50px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Nav = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 75px;
  height: auto;
  margin-right: 50px;
  @media (max-width: 960px) {
    margin-right: initial;
  }
`;

const NavLink = styled.p`
  font-family: "Big Shoulders Display", cursive;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.5em;
  margin: 10px;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    color: #33cbeb;
    transition: 0.3s;
  }
  @media (max-width: 960px) {
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
  }
`;

const SubFooter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

const SubFooterText = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const SubFooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 30px;
  height: auto;
  margin-left: 10px;
  @media (max-width: 960px) {
    margin-left: initial;
    margin-top: 10px;
  }
`;

/*Contents*/
const navContents = [
  {
    title: "Coopérative",
    url: "/cooperative",
  },
  {
    title: "Solutions",
    url: "/solutions",
  },
  {
    title: "Nos communs",
    url: "/nos-communs",
  },
  {
    title: "Mentions légales",
    url: "/mentions-legales",
  },
  {
    title: "Missions",
    url: "/missions",
  },
  {
    title: "Sur le terrain",
    url: "/sur-le-terrain",
    target: "_blank",
  },
  {
    title: "Agenda",
    url: "https://openagenda.com/assembleurs",
    target: "_blank",
  },
  {
    title: "Newsletter",
    url: "https://247b7de5.sibforms.com/serve/MUIEAHOLEPboUNbmd3oi3_29YFapcQw8vs_GQJDHY6xMGXQYHk2cRVjZIpPe_RW_Y97lu0ZNDyrxXSyaQBDnXfSl5aQFevhiQiOlmaVWhGNj1NFWBiIfWUO0dl609ehohHa-xTE4YVwSVGPlSlrYN-5b-MsmkupYGlzEZvraL5_StpN-1XeVboP7PPc_G6qfOyJkwOfwC_FwrUJk",
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <Main>
      <GlobalStyle />
      <Navbar>
        <div>
          <Link to="/">
            <Logo src={LogoAssembleurs} alt="Logo Assembleurs"></Logo>
          </Link>
        </div>
        <Nav>
          {navContents.map((content) => (
            <Link to={content.url} target={content.target}>
              <NavLink>{content.title}</NavLink>
            </Link>
          ))}
        </Nav>
      </Navbar>
      <SubFooter>
        <SubFooterText>
          <Link to="/contact">
            <NavLink>
              Contact
              <Image src={ContactLogo} alt=""></Image>
            </NavLink>
          </Link>
          <Link to="/nous-rejoindre">
            <NavLink>
              Jobs
              <Image src={JobsLogo} alt=""></Image>
            </NavLink>
          </Link>
        </SubFooterText>
        <SubFooterIcons>
          <Link to="https://twitter.com/Assembleurs" target="_blank">
            <NavLink>
              Twitter
              <Image src={TwitterLogo} alt=""></Image>
            </NavLink>
          </Link>
          <Link
            to="https://www.linkedin.com/company/les-assembleurs/"
            target="_blank"
          >
            <NavLink>
              Linkedin
              <Image src={LinkedinLogo} alt=""></Image>
            </NavLink>
          </Link>
        </SubFooterIcons>
      </SubFooter>
    </Main>
  );
};

export default Footer;
