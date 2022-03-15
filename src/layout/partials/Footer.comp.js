import React from 'react';
import tikLogo from '../../assets/img/tikLogo.png';

export const Footer = () => {
  return <div className="text-center copyright">
    {/* <a href="https://www.kbldesigners.com" alt="link">kblDesigners</a> */}
    <img
      src={tikLogo}
      className="mb-1 ml-1 mr-1" alt="logo"
      height="26px"
    />
     &copy;2022. All Rights Reserved.
  </div>

}
