import { mode } from '@chakra-ui/theme-tools';
import { ChakraProvider, ColorModeScript, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Dict } from '@chakra-ui/utils';

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
    const config: ThemeConfig = {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    };

    const theme = extendTheme({
        ...config,
        styles: {
            global: (props: Dict<any>) => ({
                body: {
                    bg: mode('#f4f4f4', '#1c1c1c')(props),
                    color: mode('#1c1c1c', '#f4f4f4')(props),
                },
                _selection: {
                    background: mode('#f4f4f4', '#1c1c1c')(props),
                },
            }),
        },
        fonts: {
            heading: 'Meow Script, sans-serif',
            body: 'Rubik, sans-serif',
        },
    });

    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme?.config.initialColorMode} />
            {children}
        </ChakraProvider>
    );
};
