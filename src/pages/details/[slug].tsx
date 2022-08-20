import { GetServerSideProps } from 'next';
import { Description } from '../../components/ContinentDetail/Description';
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
  const { name, detailBanner, description, statistics } = continent;
  return (
    <>
      <Header />
      <Hero backgroundImage={detailBanner} continentName={name} />
      <Description description={description} statistics={statistics} />
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
