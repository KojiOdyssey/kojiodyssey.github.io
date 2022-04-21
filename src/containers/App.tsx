import { Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <Container maxW={'full'} height={'full'} flexDirection={{ base: 'column', md: 'row' }} p={{ base: 4, md: 12 }}>
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
