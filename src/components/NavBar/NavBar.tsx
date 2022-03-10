import * as React from 'react';

import './NavBar.scss';

const NavBar = () => (
  <>
    <div className="navbar">
      <h3 className="navbar__heading">MoviesAPi</h3>
      <ul className="navbar__list">
        <li className="navbar__list-item">Home</li>
        <li className="navbar__list-item">Tv Show</li>
        <li className="navbar__list-item">Movies</li>
        <li className="navbar__list-item">upcoming</li>
      </ul>
      <div className="navbar__search">search</div>
    </div>
    <div className="divider" />
  </>
);

export default NavBar;
