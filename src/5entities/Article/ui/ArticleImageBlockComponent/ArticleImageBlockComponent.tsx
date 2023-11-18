import { memo } from 'react';
import { Text, TextAlign } from '@/6shared/ui/deprecated/Text';
import { VStack } from '@/6shared/ui/deprecated/Stack';
import { ArticleImageBlock } from '../../model/types/article';
import { AppImage } from '@/6shared/ui/deprecated/AppImage';
import { Skeleton } from '@/6shared/ui/deprecated/Skeleton';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { block } = props;

        return (
            <VStack align="center">
                <AppImage
                    src={block.src}
                    alt={block.title}
                    fallback={<Skeleton width={100} height={100} />}
                />
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </VStack>
        );
    },
);
