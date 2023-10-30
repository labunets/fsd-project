import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line rel-path-check/layer-imports
import { UserRole } from '@/5entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
