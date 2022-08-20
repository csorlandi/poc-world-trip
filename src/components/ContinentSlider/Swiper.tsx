import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy } from 'swiper';

import SwiperItem from './SwiperItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/lazy';

import continents from '../../data/continent-data.json';

export default function Swiper() {
  return (
    <SwiperComponent
      pagination={{ clickable: true }}
      navigation
      lazy
      loop
      speed={600}
      modules={[Navigation, Pagination, Lazy]}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.slug}>
          <SwiperItem continent={continent} />
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
}
