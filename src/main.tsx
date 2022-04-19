import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import { App } from './containers/App';
import { ThemeProvider } from './theme';

WebFont.load({
    google: {
        families: ['Rubik:300,700', 'Meow Script'],
    },
});

const container = document.getElementById('app');
ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    container!,
);
