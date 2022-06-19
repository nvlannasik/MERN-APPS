import React from 'react';
import './header.scss';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/login');
  };
  const handleClickLogo = () => {
    history.push('/');
  };
  return (
    <div className="header">
      <p className="logo-app" onClick={handleClickLogo}>
        MERN-BLOG
      </p>
      <p className="menu-item" onClick={handleClick}>
        Login
      </p>
    </div>
  );
};

export default Header;
