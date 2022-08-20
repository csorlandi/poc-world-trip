import { Link as ChakraLink, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Logo';

export function Header() {
  const { route } = useRouter();
  const isHomePage = route === '/';

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="100px"
      alignItems="center"
      justifyContent="center"
      mx="auto"
      position="relative"
    >
      <Logo />
      {!isHomePage && (
        <Link href="/" passHref>
          <ChakraLink position="absolute" left={[0, 0, 0, '140']}>
            <Image
              src="/images/back-icon.svg"
              alt="World Trip Logo"
              px={4}
              py={2}
            />
          </ChakraLink>
        </Link>
      )}
    </Flex>
  );
}
