import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleAuthModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.TERTIARY}
                    size={ButtonSize.S}
                    onClick={onToggleAuthModal}
                >
                    {t('Login')}
                </Button>
            </div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleAuthModal}>
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur atque
                beatae, commodi cumque deserunt doloremque doloribus esse et eum eveniet expedita
                explicabo fugiat harum illo impedit inventore ipsa iste iure labore laboriosam
                laborum magnam minus molestiae natus neque nisi nobis non nostrum numquam odio
                officia omnis optio perspiciatis placeat porro quae quas quia quibusdam quidem quis
                quod quos ratione recusandae repellat repellendus reprehenderit repudiandae saepe
                sapiente sequi sint sit soluta suscipit tempora tenetur totam ullam ut veniam
                voluptas voluptatem voluptatibus voluptatum? Accusantium ad aliquam aliquid amet
                animi asperiores aspernatur atque aut autem blanditiis commodi consequatur cum
                cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio dolor
                doloribus dolorum eaque earum eius eligendi error esse est et excepturi expedita
            </Modal>
        </div>
    );
};
