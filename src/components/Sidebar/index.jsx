import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SideBarMenu,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SideBarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="/discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="/services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="/signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
