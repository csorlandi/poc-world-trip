import type { NextPage } from 'next';
import Categories from '../components/Categories';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
    </>
  );
};

export default Home;
