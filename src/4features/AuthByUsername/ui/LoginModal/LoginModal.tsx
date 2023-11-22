import { Suspense } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Modal } from '@/6shared/ui/redesigned/Modal';
import { Loader } from '@/6shared/ui/deprecated/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
