import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/6shared/ui/Button';
import GlobeIcon from '@/6shared/assets/icons/filled-globe.svg';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.TERTIARY_INVERTED}
            onClick={toggleLanguage}
        >
            <GlobeIcon />
        </Button>
    );
});
