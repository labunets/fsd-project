import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '1app/providers/ThemeProvider';
import { ErrorBoundary } from '1app/providers/ErrorBoundary';
import { StoreProvider } from '1app/providers/StoreProvider';
import '6shared/config/i18n/i18n';
import App from '1app/App';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
