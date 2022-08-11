import { Image, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" passHref>
      <ChakraLink>
        <Image src="/images/logo.svg" alt="World Trip Logo" px={4} py={2} />
      </ChakraLink>
    </Link>
  );
}
