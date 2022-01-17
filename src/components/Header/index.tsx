import React from 'react';
import { logo, iconHamburguer } from '../../assets/images';
import Button from '../Button';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <img src={iconHamburguer} alt="Menú Mobile" className="header__hamburguer" />
        <Button className="header__btn">LOGIN</Button>
      </div>
    </div>
  );
};

export default Header;
