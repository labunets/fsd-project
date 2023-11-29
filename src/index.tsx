import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/1app/providers/ThemeProvider';
import { ErrorBoundary } from '@/1app/providers/ErrorBoundary';
import { StoreProvider } from '@/1app/providers/StoreProvider';
import '@/6shared/config/i18n/i18n';
import App from '@/1app/App';
import { ForceUpdateProvider } from '@/6shared/lib/render/forceUpdate';

const container = document.getElementById('root');

if (!container) {
    throw new Error('No root element found');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
export { Theme } from '@/6shared/const/theme';
