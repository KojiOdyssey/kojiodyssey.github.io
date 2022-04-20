import { Box, Heading, Text } from '@chakra-ui/react';

export const Header = () => {
    return (
        <Box height={{ base: '85vh', lg: '90vh' }} textAlign={'left'} py={{ base: '8%', lg: 32 }}>
            <Heading display={'flex'} fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }} lineHeight={'150%'}>
                KojiOdyssey
            </Heading>
            <Text fontSize={{ base: '5xl', md: '6xl', lg: '8xl' }} fontWeight={700} lineHeight={'115%'}>
                A developer, designer, and cat lover. 😸
            </Text>
        </Box>
    );
};
