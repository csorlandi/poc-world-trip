import { Flex } from '@chakra-ui/react';
import CategoryItem from './CategoryItem';

import categories from '../../../data/categories.json';

export function Categories() {
  return (
    <Flex
      as="section"
      w="100%"
      maxWidth={1160}
      alignItems="center"
      justifyContent="space-around"
      mx="auto"
      pt={114}
    >
      {categories.map(category => (
        <CategoryItem key={category.path} category={category} />
      ))}
    </Flex>
  );
}
