import { memo, useCallback } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import CopyIcon from '@/6shared/assets/icons/outline-copy.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '../../deprecated/Button/Button';
import { Button } from '../../redesigned/Button/Button';
import cls from './Code.module.scss';
import { ToggleFeatures } from '@/6shared/lib/features';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
                    <Button onClick={onCopy} className={cls.copyBtn} variant="clear" size="l">
                        <CopyIcon className={cls.copyIcon} />
                    </Button>
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <ButtonDeprecated
                        onClick={onCopy}
                        className={cls.copyBtn}
                        theme={ButtonTheme.TERTIARY}
                    >
                        <CopyIcon className={cls.copyIcon} />
                    </ButtonDeprecated>
                    <code>{text}</code>
                </pre>
            }
        />
    );
});
