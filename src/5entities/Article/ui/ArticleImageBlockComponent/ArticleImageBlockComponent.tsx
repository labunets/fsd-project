import { memo } from 'react';
import { Text, TextAlign } from '@/6shared/ui/Text/Text';
import { VStack } from '@/6shared/ui/Stack';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        block,
    } = props;

    return (
        <VStack align="center">
            <img
                src={block.src}
                alt={block.title}
            />
            {block.title
                && (
                    <Text
                        text={block.title}
                        align={TextAlign.CENTER}
                    />
                )}
        </VStack>
    );
});
