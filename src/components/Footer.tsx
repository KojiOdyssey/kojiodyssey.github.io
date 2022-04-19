import { Box, Button, Container, Link, Stack, Text, useColorMode } from '@chakra-ui/react';

export const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container
            display="flex"
            as={Stack}
            maxW="full"
            direction={{ base: 'column', md: 'row' }}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
        >
            <Text>
                Contact me:{' '}
                <Link
                    color="twitter.500"
                    href="mailto:kojiody@gmail.com"
                    _focus={{
                        ring: false,
                    }}
                >
                    kojiody@gmail.com
                </Link>
            </Text>
            <Box as={Stack} direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'center' }}>
                <Button
                    fontSize={{ base: 'lg', md: 'xl' }}
                    variant="ghost"
                    borderRadius="full"
                    onClick={toggleColorMode}
                >
                    {colorMode === 'light' ? '🌙' : '☀️'}
                </Button>
                <Text>© 2022</Text>
            </Box>
        </Container>
    );
};
