"use client"
import React from "react";
import Link from "next/link";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledCheckboxContainer, StyledCheckboxInput, StyledCheckboxText, StyledContainer, StyledForgotPasswordLink, StyledForm, StyledFormContainer, StyledIcon, StyledInfo, StyledInput, StyledLogoContainer, StyledSignupLink, StyledSubmitButton, StyledText } from "./ConnexionStyle";


const Connexion = () => {
  return (
    <>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledIcon>
            <Image src={iconRed} alt="logo Red" />
          </StyledIcon>
          <StyledText>Red Product</StyledText>
        </StyledLogoContainer>
        <StyledFormContainer>
          <StyledForm>
            <StyledInfo>Connectez-vous en tant qu'admin</StyledInfo>
            <div className="mb-2">
              <label htmlFor="email" className="font-bold" style={{color: '#45484B'}}>Email</label>
              <StyledInput id="email" type="email" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold" style={{color: '#45484B'}}>Mot de passe</label>
              <StyledInput id="password" type="password" />
            </div>
            <StyledCheckboxContainer>
              <StyledCheckboxInput
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
              />
              <StyledCheckboxText>Garder-moi connecter</StyledCheckboxText>
            </StyledCheckboxContainer>
            <Link href="/dashboard">
              <StyledSubmitButton type="submit">Se connecter</StyledSubmitButton>
            </Link>
          </StyledForm>
        </StyledFormContainer>
        <Link href="/forgotpwd">
        <StyledForgotPasswordLink>
            Mot de passe oublié?
        </StyledForgotPasswordLink>
        </Link>
        <StyledSignupLink>
          Vous n'avez pas de compte?{" "}
          <Link href="/inscription" style={{color: "#ffcc00"}}>Inscription</Link>
        </StyledSignupLink>
      </StyledContainer>
    </>
  );
};

export default Connexion;
