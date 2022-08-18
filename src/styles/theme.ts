import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      ':root': {
        '--swiper-navigation-color': '#FFBA08',
        '--swiper-pagination-color': '#FFBA08',
        '--swiper-pagination-bullet-inactive-color': '#999',
        '--swiper-pagination-bullet-width': '16px',
        '--swiper-pagination-bullet-height': '16px',
      },
      body: {
        bg: 'gray.50',
      },
    },
  },
});
