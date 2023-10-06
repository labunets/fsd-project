import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign } from '6shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            <img
                src={block.src}
                alt={block.title}
                className={cls.image}
            />
            {block.title
                && (
                    <Text
                        text={block.title}
                        align={TextAlign.CENTER}
                        className={cls.title}
                    />
                )}
        </div>
    );
});
