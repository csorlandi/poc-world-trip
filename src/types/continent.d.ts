export type ContinentStatistics = {
  id: string;
  label: string;
  quantity: number;
  tooltipText?: string;
};

export type MostVisitedCities = {
  id: string;
  image: string;
  name: string;
  country: string;
  countryFlag: string;
};

export type Continent = {
  slug: string;
  name: string;
  cta: string;
  path: string;
  slideImage: string;
  detailBanner: string;
  description: string;
  statistics: ContinentStatistics[];
  mostVisitedCities: MostVisitedCities[];
};
