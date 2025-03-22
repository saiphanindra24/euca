import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex w-full h-auto md:h-64 lg:h-80">
      <img
        className="w-1/3 h-1000 object-cover"
        src={assets.header}
        alt="1"
      />
      <img
        className="w-1/3 h-auto object-cover"
        src={assets.header2}
        alt=""
      />
      <img
        className="w-1/3 h-auto object-cover"
        src={assets.header3}
        alt=""
      />
    </div>
  );
};

export default Header;
