import React from 'react';
import Audioplayer from '../Plugins/Audioplayer';
import Footer from "../components/Footer/Footer";
import Header from "../components/Layout/Header/Header";


const Home = <T extends object>(props: T): JSX.Element => {
  return (
    <React.Fragment>
      <main>        
        <Header />
        <Audioplayer />
        <Footer />
      </main>
    </React.Fragment>
    
  )
}

export default Home