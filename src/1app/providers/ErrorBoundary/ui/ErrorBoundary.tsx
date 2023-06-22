import { Theme } from '1app/providers/ThemeProvider';
import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from '3widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        const theme = localStorage.getItem('theme') as Theme || Theme.DARK;

        if (hasError) {
            // any custom fallback UI
            return (
                <Suspense fallback="">
                    <PageError className={`app ${theme}`} />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
