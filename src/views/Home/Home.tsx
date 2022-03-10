import * as React from 'react';
import { useHistory } from 'react-router-dom';
import BackGround from '../../components/BackGround';
import Button from '../../components/common/general/Button';
import NavBar from '../../components/NavBar';

import './Home.scss';

const Home = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push('/browse');
  };
  return (
    <BackGround>
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
