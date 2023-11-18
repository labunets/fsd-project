import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import {
    Button as DeprecatedButton,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import GlobeIcon from '@/6shared/assets/icons/filled-globe.svg';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Button } from '@/6shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    square
                    size="l"
                    className={classNames('', {}, [className])}
                    variant="clear"
                    onClick={toggleLanguage}
                >
                    <GlobeIcon />
                </Button>
            }
            off={
                <DeprecatedButton
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.TERTIARY_INVERTED}
                    onClick={toggleLanguage}
                >
                    <GlobeIcon />
                </DeprecatedButton>
            }
        />
    );
});
