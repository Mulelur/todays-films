import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../common/general/Icons';

import './NavBar.scss';

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);

  const onScroll = () => {
    if (window.scrollY >= 2) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener('scroll', onScroll);

  return (
    <div className={`navBar ${scrolling ? 'scrolling' : ''}`}>
      <div className="navbar__container">
        <h3 className="navbar__heading">
          <NavLink className="navbar__heading-link" to="/">
            Explore <span className="navbar__logo">Movie</span>
          </NavLink>
        </h3>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <NavLink className="navbar__list-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__list-item">
            {' '}
            <NavLink className="navbar__list-link" to="/browse">
              Popular Films
            </NavLink>
          </li>
          <li className="navbar__list-item">
            {' '}
            <NavLink className="navbar__list-link" to="/about">
              About the developer
            </NavLink>
          </li>
        </ul>
        <div
          onClick={() => setShowMenu(!showMenu)}
          onKeyPress={() => {}}
          tabIndex={0}
          role="button"
          className="navbar__menu-icon"
        >
          <Icons name="menu" />
        </div>
        <div className={`navbar__menu ${showMenu ? 'show' : ''}`}>
          <div
            onClick={() => setShowMenu(!showMenu)}
            onKeyPress={() => {}}
            tabIndex={0}
            role="button"
            className="navbar__menu-clear"
          >
            <Icons style={{ color: 'rgba(90, 84, 84, 0.781)' }} name="clear" />
          </div>
          <div className="divider" />
          <ul className="navbar__menu-list">
            <li className="navbar__menu-list--item">
              <NavLink className="navbar__list-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar__menu-list--item">
              <NavLink className="navbar__list-link" to="/browse">
                Popular Films
              </NavLink>
            </li>
            <li className="navbar__menu-list--item">
              <NavLink className="navbar__list-link" to="/about">
                About the developer
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
};

export default NavBar;
