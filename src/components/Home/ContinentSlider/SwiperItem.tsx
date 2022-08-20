import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Continent } from '../../types/continent';

type SwiperItemProps = {
  continent: Pick<Continent, 'name' | 'cta' | 'path' | 'slideImage'>;
};

export default function SwiperItem({
  continent: { name, cta, path, slideImage },
}: SwiperItemProps) {
  return (
    <Link href={path} passHref>
      <ChakraLink _hover={{ textDecoration: 'none' }}>
        <Flex
          direction="column"
          minH={450}
          backgroundImage={`url(${slideImage})`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="white" fontSize={48} fontWeight="700">
            {name}
          </Text>
          <Text color="white" fontWeight="600" fontSize={24} mt={4}>
            {cta}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}
