import { GetServerSideProps } from 'next';
import { Hero } from '../../components/ContinentDetail/Hero';
import { Header } from '../../components/Header';

import continents from '../../data/continent-data.json';
import { Continent } from '../../types/continent';

type ContinentParams = {
  slug: string;
};

type ContinentDetailsProps = {
  continent: Omit<Continent, 'cta' | 'slideImage'>;
};

export default function ContinentDetails({ continent }: ContinentDetailsProps) {
  const { name, detailBanner } = continent;
  return (
    <>
      <Header />
      <Hero backgroundImage={detailBanner} continentName={name} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as ContinentParams;

  const continent = continents.find(
    continentData => continentData.slug === slug,
  );

  return {
    props: {
      continent,
    },
  };
};
