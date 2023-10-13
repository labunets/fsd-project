import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttlingRef = useRef(false);

    return useCallback((...args: any[]) => {
        if (!throttlingRef.current) {
            callback(...args);
            throttlingRef.current = true;

            setTimeout(() => {
                throttlingRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
}
