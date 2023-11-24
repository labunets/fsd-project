import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/6shared/lib/features';

interface ArticleTextBlockComponentProps {
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { block } = props;
    const { t } = useTranslation();

    return (
        <VStack>
            {block.title && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={block.title} />}
                    off={<TextDeprecated title={block.title} />}
                />
            )}
            {block.paragraphs.map((paragraph) => (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text key={paragraph} text={paragraph} />}
                    off={<TextDeprecated key={paragraph} text={paragraph} />}
                />
            ))}
        </VStack>
    );
});
