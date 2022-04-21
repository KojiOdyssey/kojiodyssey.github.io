import { Button, Container, Link, Stack, Text, useColorMode } from '@chakra-ui/react';

export const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container
            as={Stack}
            direction={'row'}
            maxW={'inherit'}
            position={'fixed'}
            bottom={0}
            left={0}
            right={0}
            align={{ base: 'center', md: 'center' }}
            fontSize={{ base: 'xl', md: '2xl' }}
            justify={{ base: 'center', md: 'space-between' }}
            p={{ base: 8, md: 12 }}
            spacing={{ base: 4, md: 7 }}
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
            <Stack align={{ base: 'center', md: 'center' }} direction={'row'}>
                <Button fontSize="inherit" variant="ghost" borderRadius="full" onClick={toggleColorMode}>
                    {colorMode === 'light' ? '🌙' : '☀️'}
                </Button>
                <Text whiteSpace={'nowrap'}>© 2022</Text>
            </Stack>
        </Container>
    );
};
