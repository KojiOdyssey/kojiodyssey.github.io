import { Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <Container maxW="1470" minH={'100vh'} flexDirection={{ base: 'column', md: 'row' }}>
            {children}
        </Container>
    );
};

export const App = () => {
    return (
        <Wrapper>
            <Header />
            <Footer />
        </Wrapper>
    );
};
