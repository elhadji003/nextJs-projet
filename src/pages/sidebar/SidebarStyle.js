import styled from 'styled-components';

export const SidebarContainer = styled.div``;

export const StyledSidebarNav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 40;
  width: 260px;
  height: 100%;
  background-color: #333; /* Je suppose que bg-neutral-900 correspond à #333 */
  border-right: 1px solid #ccc; /* Je suppose que c'est une couleur de bordure grise */
  
  &.active {
    // Ajoutez des styles pour le cas où la classe active est présente
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  border-bottom: 1px solid #000;
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const RedProductTitle = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1rem;

    @media (max-width: 768px) {
    font-size: 0.75rem;
    }

    @media (max-width: 1024px) {
    font-size: 0.75rem;
    }

    @media (max-width: 1280px) {
    font-size: 0.75rem;
    }
`;

export const ToggleWrapper = styled.div`
    position: relative;
    display: flex;
    gap: 0.75rem;
    margin-left: 0.5rem;
`;

export const ToggleButton = styled.button`
    position: relative;
    left: 1.125rem;
    background: none;
    border: none;

    @media (min-width: 320px) {
      left: 1.5rem;
    }
    @media (min-width: 768px) {
      left: 1.5rem;
    }
    @media (min-width: 1024px) {
      display: none;
    }
    @media (min-width: 1280px) {
      display: none;
    }  
`;

 export const SidebarContainer2 = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  &.sidebar {
    /* Ajoutez ici vos styles pour la classe 'sidebar' */
  }
`;

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  liste-style: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0px

`;

export const ListLi = styled.li`
  width: 100%;
  &:hover {
    background-color: #edf2f7;
    width: 100%;
    color: #000; 
    left: 0px
    right: 0;
  }
`;
export const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 3rem; 
  transition: background-color 0.3s, color 0.3s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: bold; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 12rem;
  padding: 0.75rem;
`;
