"use client"
import React from "react";
import Image from "next/image";
import iconRed from "../assets/icon.png";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, StyledButton, StyledCheckboxContainer, StyledCheckboxInput, StyledCheckboxText, StyledContainer, StyledFrm, StyledFrmInput, StyledIcon, StyledInfo, StyledInput, StyledLogoContainer, StyledSignupLien, StyledText, } from "../../styles/Connexion.Style";


const Inscription = () => {
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledIcon>
          <Image src={iconRed} alt="logo Red" />
        </StyledIcon>
        <StyledText>Red Product</StyledText>
      </StyledLogoContainer>
      <Form>
        <StyledFrm>
          <StyledInfo>Inscrivez-vous en tant qu'admin</StyledInfo>
          <StyledFrmInput>
            <StyledFrmLabelLabel htmlFor="username">Prénom</StyledFrmLabelLabel>
            <StyledInput id="username" type="text" />
          </StyledFrmInput>
          <StyledFrmInput>
            <StyledFrmLabelLabel htmlFor="email">Email</StyledFrmLabelLabel>
            <StyledInput id="email" type="email" />
          </StyledFrmInput>
          <StyledFrmInput>
            <StyledFrmLabelLabel htmlFor="password">Mot de passe</StyledFrmLabelLabel>
            <StyledInput id="password" type="password" />
          </StyledFrmInput>
          <StyledCheckboxContainer>
            <StyledCheckboxInput id="checkbox" type="checkbox"/>
            <StyledCheckboxText>
              Accepter les termes et la politique
            </StyledCheckboxText>
          </StyledCheckboxContainer>
          <StyledButton type="button">Inscription</StyledButton>
        </StyledFrm>
      </Form>
      <StyledSignupLien>
        Vous avez déjà un compte? <Link href="/">Se connecter</Link>
      </StyledSignupLien>
    </StyledContainer>
  );
};

export default Inscription;
