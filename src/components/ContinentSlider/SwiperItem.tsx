import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

type Continent = {
  name: string;
  description: string;
  path: string;
  image: string;
};

type SwiperItemProps = {
  continent: Continent;
};

export default function SwiperItem({
  continent: { name, description, path, image },
}: SwiperItemProps) {
  return (
    <Link href={path} passHref>
      <ChakraLink _hover={{ textDecoration: 'none' }}>
        <Flex
          direction="column"
          minH={450}
          backgroundImage={`url(${image})`}
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
            {description}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}
