import { classNames } from '6shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from '6shared/ui/Button/Button';
import CopyIcon from '6shared/assets/icons/outline-copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyButton}
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.M}
                beforeIcon={<CopyIcon />}
                onClick={onCopy}
            />
            <code>
                {text}
            </code>
        </pre>
    );
});