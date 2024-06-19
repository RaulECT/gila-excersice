import React from 'react';
import { Layout } from 'antd';

import './Header.style.css';

const { Header: HeaderAntd } = Layout;

const Header: React.FC = () => (
  <HeaderAntd className='header-app'>
    <h2 className='header--title'>Notification App</h2>
  </HeaderAntd>
);

export default Header;
