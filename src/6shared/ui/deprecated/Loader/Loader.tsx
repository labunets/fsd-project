import './Loader.scss';
import { classNames } from '@/6shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

/**
 * Deprecated, using new components from redesigned folder
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-roller', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
