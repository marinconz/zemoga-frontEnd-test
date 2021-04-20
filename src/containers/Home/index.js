import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import TopBanner from '../../components/TopBanner';
import BottomBanner from '../../components/BottomBanner';
import Footer from '../../components/Footer';
import CardContainer from '../../components/CardContainer';

const Home = () => (
  <>
    <HeroBanner />
    <TopBanner />
    <CardContainer />
    <BottomBanner />
    <Footer />
  </>
);

export default Home;
