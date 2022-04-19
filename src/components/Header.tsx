import { Box, Heading, Text } from '@chakra-ui/react';

export const Header = () => {
    return (
        <Box height={'90vh'} textAlign={'left'} py={{ base: 20, md: 36 }}>
            <Heading display={'flex'} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'150%'}>
                KojiOdyssey
            </Heading>
            <Text fontSize={{ base: '2xl', sm: '5xl', md: '8xl' }} fontWeight={700} lineHeight={'115%'}>
                A developer, designer, and cat lover. 😸
            </Text>
        </Box>
    );
};
