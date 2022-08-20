import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Hero } from '../components/Home/Hero';
import { Categories } from '../components/Home/Categories';
import { Divider } from '../components/Home/Divider';
import { ContinentSlider } from '../components/Home/ContinentSlider';

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
