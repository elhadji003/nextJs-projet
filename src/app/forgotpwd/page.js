"use client"
import React from "react";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";


const StyledContainer = styled.div`
  background-color: #1e1e1e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 0;
`;

const StyledIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;

const StyledText = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.125rem;
`;

const StyledFormContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem; 
`;

const StyledInfo = styled.p`
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 0.75rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledTextInfo = styled.div`
  color: #a1a2a3;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #494c4f;
  border-radius: 1rem;
  padding: 0.5rem 0.75rem;
  color: #4b5563;
  margin-bottom: 1rem;
  background-color: transparent;
  &:focus {
    outline: none;
    border: 1px solid #494c4f;
    border-radius: 1rem;

  }
`;

const StyledButton = styled.button`
  width: 100%;
  background: #45484B;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: #000;
  }
`;

const StyledBackToLoginLink = styled.div`
  color: #ffffff;
`;

const ForgotPwd = () => {
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
            <StyledInfo>Mot de passe oublié?</StyledInfo>
            <StyledTextInfo>
              Entrez votre adresse e-mail ci-dessous et nous vous envoyons des
              instructions sur la façon de modifier votre mot de passe.
            </StyledTextInfo>
            <div className="mb-4">
              <label htmlFor="email" className="font-bold" style={{color: '#45484B'}}>Email</label>
              <StyledInput id="email" type="email" />
            </div>
            <StyledButton type="button">Envoyez</StyledButton>
          </StyledForm>
        </StyledFormContainer>
        <StyledBackToLoginLink>
          Revenir à la{" "}
          <Link href="/" className="font-bold" style={{color: "#ffcc00"}}>connexion</Link>
        </StyledBackToLoginLink>
      </StyledContainer>
    </>
  );
};

export default ForgotPwd;
