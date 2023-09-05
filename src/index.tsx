import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'shared/contexts/theme/ThemeContext';
import App from './app/App';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
