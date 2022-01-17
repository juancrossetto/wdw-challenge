import React from 'react';
import { logoWhite } from '../../assets/images';
import { Button } from 'react-bootstrap';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner container">
        <div className="footer__logo">
          <img src={logoWhite} alt="" />
        </div>
        <p className="footer__text">© All rights reserved {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
