import { Flex } from '@chakra-ui/react';
import CategoryItem from './CategoryItem';

import categories from './categories.json';

export default function Categories() {
  return (
    <Flex
      as="section"
      w="100%"
      maxWidth={1440}
      h="100px"
      alignItems="center"
      justifyContent="space-around"
      mx="auto"
      pt={160}
      pb={160}
    >
      {categories.map(category => (
        <CategoryItem category={category} />
      ))}
    </Flex>
  );
}
