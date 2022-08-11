import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="100px"
      alignItems="center"
      justifyContent="center"
      mx="auto"
    >
      <Logo />
    </Flex>
  );
}
