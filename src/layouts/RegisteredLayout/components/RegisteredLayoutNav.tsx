import React from 'react';
import { Button } from 'antd';
import { BulbOutlined, LoginOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import RegisteredLayoutNav from './_RegisteredLayoutNavStyle';
import { ABOUT_PATH, SEARCH_EVENT_PATH } from '../../../config/urls';
import { useAppContext } from '../../../context/AppContext';

const Menus = ({ menuClassName }: { menuClassName?: string }) => {
  const { setAppState } = useAppContext();
  return (
    <div className={menuClassName}>
      <NavLink to={ABOUT_PATH} className="navlink">
        <div className="menu-item">
          <BulbOutlined className="icon" />
          ABOUT
        </div>
      </NavLink>
      <NavLink to={SEARCH_EVENT_PATH} className="navlink">
        <div className="menu-item">
          <SearchOutlined className="icon" />
          SEARCH EVENT
        </div>
      </NavLink>
      <div onClick={() => setAppState({ auth: false })} className="navlink">
        <div className="menu-item">
          <LoginOutlined className="icon" />
          SIGN OUT
        </div>
      </div>
    </div>
  );
};

export const RegisteredLayoutDesktopNav = ({ toggleMobileNav }: { toggleMobileNav: () => void }) => {
  return (
    <div className={RegisteredLayoutNav.RegisteredLayoutDesktopNavStyle}>
      <Menus menuClassName="menu" />
      <Button className="burger-button" type="dashed" shape="circle" icon={<MenuOutlined />} onClick={toggleMobileNav} />
    </div>
  );
};

export const RegisteredLayoutMobileNav = ({ isShow }: { isShow: boolean }) => {
  const menuClassName = isShow ? 'menu show' : 'menu';
  return (
    <div className={RegisteredLayoutNav.RegisteredLayoutMobileNavStyle}>
      <Menus menuClassName={menuClassName} />
    </div>
  );
};
