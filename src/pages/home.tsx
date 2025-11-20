import React from 'react';

import Header from './header';
import PageComponent from '../components/PageComponent';
import Hero from '../components/hero';
import RandomProject from './PROJECTS/randomProjects';
import EmailPopup from '../components/Banner';
// import MovingText from '../components/movingText';




const Home: React.FC = () => {
  return (
    <>
    {/* <MovingText/> */}
   <Header />
  <Hero />
  <EmailPopup/>
  <PageComponent />  
  <RandomProject/>
    
    </>
  
  );
};

export default Home;
