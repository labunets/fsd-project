import { memo } from 'react';
import { Code } from '@/6shared/ui/Code/Code';
import { VStack } from '@/6shared/ui/Stack';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { block } = props;

    return (
        <VStack>
            <Code text={block.code} />
        </VStack>
    );
});
