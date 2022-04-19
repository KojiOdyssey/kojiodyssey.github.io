import { createRoot } from 'react-dom/client';
import { App } from './containers/App';

import { ThemeProvider } from './theme';

import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Rubik:300,700', 'Meow Script'],
    },
});

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
);
