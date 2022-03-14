import * as React from 'react';
import { useHistory } from 'react-router-dom';
import BackGround from '../../components/BackGround';
import Button from '../../components/common/general/Button';
import NavBar from '../../components/NavBar';

import defaultImg from '../../assets/ansel_elgort_rachel_zegler_4k_hd_west_side_story_2021.jpg';

import './Home.scss';

const Home = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push('/browse');
  };

  // 414906
  return (
    <BackGround img={defaultImg}>
      <NavBar />
      <div className="home">
        <h1 className="home__heading">Welcome Home...</h1>
        <Button type="button" onClick={handelClick}>
          Browse
        </Button>
      </div>
    </BackGround>
  );
};

export default Home;
