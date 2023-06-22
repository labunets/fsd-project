import { classNames } from '6shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames('', { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
