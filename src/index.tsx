import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'shared/contexts/theme/ThemeContext';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
);
