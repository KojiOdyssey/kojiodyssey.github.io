import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

export const Header = () => {
    return (
        <Container maxW={'inherit'}>
            <Stack as={Box} textAlign={'left'} py={{ base: 6, md: 36 }}>
                <Heading fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
                    KojiOdyssey
                </Heading>
                <Text fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }} fontWeight={600}>
                    A developer, designer, and cat lover. 😸
                </Text>
            </Stack>
        </Container>
    );
};
