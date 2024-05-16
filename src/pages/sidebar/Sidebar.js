"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import iconRed from "../../app/assets/icon.png";
import { Div1, Div2, ListLi, RedProductTitle, SidebarContainer, SidebarContainer2, SidebarList, StyledLink, StyledSidebarNav, ToggleButton, ToggleWrapper } from './SidebarStyle';
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css"


const Sidebar = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const [chevron, setChevron] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
        setChevron(prevChange => !prevChange);
    };

    return (
        <SidebarContainer>
            <div className="Sidebar">
                <StyledSidebarNav className={`${isSidebarActive ? 'active' : ''}`}>
                        <Div1>
                            <Div2>
                                <div className="icon"> <Image src={iconRed} alt='logo Red'/></div>
                                <RedProductTitle>Red Product</RedProductTitle>
                                <ToggleWrapper>
                                <ToggleButton onClick={toggleSidebar}>
                                    {chevron ? <FontAwesomeIcon icon={faChevronLeft} size="2x" color='white' style={{ right: '1rem' }} /> : 
                                    <FontAwesomeIcon icon={faChevronRight} size="2x" color='black' style={{marginLeft: '1rem'}}/>}
                                </ToggleButton>
                                </ToggleWrapper>
                            </Div2>
                        </Div1>
                        <SidebarContainer2>
                        <SidebarList>
                        <li>
                            <div className="d-flex flex-row align-items-center p-3">
                                <div style={{color: "azure"}}>Principale</div>
                            </div>
                        </li>
                        <ListLi>
                            <Link href="/dashboard">
                                <StyledLink>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faHome} size='1x'/>
                                    </span>
                                    <span>Dashboard</span>
                                </StyledLink>
                            </Link>
                        </ListLi>
                        <ListLi>
                            <Link href="./cardHotel">
                            <StyledLink>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faHome} size='1x'/>
                                </span>
                                <span className="text">Listes des Hotels</span>
                            </StyledLink>
                            </Link>
                        </ListLi>
                        </SidebarList>
                    </SidebarContainer2>
                </StyledSidebarNav>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar;
