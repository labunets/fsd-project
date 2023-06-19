import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import GlobeIcon from 'shared/assets/icons/filled-globe.svg';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.TERTIARY}
            onClick={toggleLanguage}
        >
            <GlobeIcon />
        </Button>
    );
};
