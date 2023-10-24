import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/1app/providers/ThemeProvider';
import { ErrorBoundary } from '@/1app/providers/ErrorBoundary';
import { StoreProvider } from '@/1app/providers/StoreProvider';
import '@/6shared/config/i18n/i18n';
import App from '@/1app/App';

const container = document.getElementById('root');

if (!container) {
    throw new Error('No root element found');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
