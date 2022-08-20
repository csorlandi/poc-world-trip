import { Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

type Category = {
  path: string;
  label: string;
  icon: string;
  iconAlt: string;
};

type CategoryItemProps = {
  category: Category;
};

export default function CategoryItem({
  category: { path, label, icon, iconAlt },
}: CategoryItemProps) {
  return (
    <Link href={path} passHref>
      <ChakraLink
        _hover={{ textDecoration: 'none' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Image src={icon} alt={iconAlt} w={85} h={85} alignSelf="center" />
        <Text mt={6} fontWeight="600" fontSize="24" color="gray.600">
          {label}
        </Text>
      </ChakraLink>
    </Link>
  );
}
