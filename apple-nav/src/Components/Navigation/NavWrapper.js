import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavHeader = styled.div`
  width: 100%;
  background: #313131;
  height: 44px;
`;

const NavWrapper = () => {
  return <NavHeader />;
};

export default NavWrapper;
