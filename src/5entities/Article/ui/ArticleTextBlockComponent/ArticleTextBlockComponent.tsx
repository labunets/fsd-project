import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/6shared/ui/deprecated/Text';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { block } = props;
        const { t } = useTranslation();

        return (
            <VStack>
                {block.title && <Text title={block.title} />}
                {block.paragraphs.map((paragraph) => (
                    <Text key={paragraph} text={paragraph} />
                ))}
            </VStack>
        );
    },
);
