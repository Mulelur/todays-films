import * as React from 'react';
import BackGround from '../../components/BackGround';
import NavBar from '../../components/NavBar';
import img from '../../assets/frida_gustavsson_leo_suter_sam_corlett_hd_vikings_valhalla.jpg';

import './About.scss';

const About = () => (
  <BackGround img={img}>
    <NavBar />
    <div className="about">
      <div className="about__container">
        <div className="about__heading">
          <h3>Developer Infomation</h3>
        </div>
        <div className="about__list">
          <div>
            <span className="about__key">Name</span>:{' '}
            <span className="about__value">Rotonda</span>
          </div>
          <div>
            <span className="about__key">Surname</span>:{' '}
            <span className="about__value">Mulelu</span>
          </div>
          <div>
            <span className="about__key">Email</span>:{' '}
            <a className="about__value" href="mailto:rotondwamulelu@gmail.com">
              rotondwamulrlu@mgail.com
            </a>
          </div>
          <div>
            <span className="about__key">Phone</span>:{' '}
            <span className="about__value">0712051353</span>
          </div>
        </div>
      </div>
    </div>
  </BackGround>
);

export default About;
