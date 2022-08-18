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
      py={160}
    >
      {categories.map(category => (
        <CategoryItem key={category.path} category={category} />
      ))}
    </Flex>
  );
}
