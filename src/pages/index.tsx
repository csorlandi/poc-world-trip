import type { NextPage } from 'next';
import Categories from '../components/Categories';
import ContinentSlider from '../components/ContinentSlider';
import Divider from '../components/Divider';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Divider />
      <ContinentSlider />
    </>
  );
};

export default Home;
