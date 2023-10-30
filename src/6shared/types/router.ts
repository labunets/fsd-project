import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/5entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
