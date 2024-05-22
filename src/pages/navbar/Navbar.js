"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileAdmin from "../../app/assets/img-2.jpg";
import { signOut } from "next-auth/react";

import { 
  NavbarContainer, 
  NavbarNav, 
  TitleContainer, 
  Title, 
  Toolbar, 
  BellIcon, 
  ProfileImage, 
  LogoutIcon, 
  ProfileAdminImage, 
  DivNv1,
  DivNav2,
  FlexContainer,
  SearchContainer,
  SearchInput,
  Header_Wrapper,
  Header_Box,
  Header_Span
} from '../../styles/Navabar.Style';
import { StyledButton } from "../../styles/Connexion.Style";

const Navbar = () => {
  const handleSignOut = () => {
    signOut({
      redirect: true,
      callbackUrl: "/"  // Redirect to the homepage after sign-out
    });
  };

  return (
    <NavbarContainer>
      <NavbarNav>
        <DivNv1>
          <DivNav2>
            <TitleContainer>
              <FlexContainer>
                <Title aria-current="page">Dashboard</Title>
              </FlexContainer>
            </TitleContainer>
            <Toolbar>
              <SearchContainer>
                <SearchInput type="text" placeholder="🔎 rechercher" />
              </SearchContainer>
              <BellIcon>
                <Link href="/notification">
                  <FontAwesomeIcon icon={faBell} color="black" />
                </Link>
              </BellIcon>
              <ProfileImage>
                <ProfileAdminImage src={ProfileAdmin} alt='Profile Admin' width={40} height={40} />
              </ProfileImage>
              <LogoutIcon>
                <StyledButton type="button" onClick={handleSignOut}>
                  <FontAwesomeIcon icon={faRightToBracket} color="black" />
                </StyledButton>
              </LogoutIcon>
            </Toolbar>
          </DivNav2>
        </DivNv1>
      </NavbarNav>

      <Header_Wrapper>
        <Header_Box>
          <Header_Span>Bienvenue sur Red Product</Header_Span>
          <Header_Span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Header_Span>
        </Header_Box>
      </Header_Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
