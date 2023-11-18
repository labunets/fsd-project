import { LinkProps, NavLink } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        children,
        variant = 'primary',
        className,
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
