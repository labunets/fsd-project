import { memo } from 'react';
import { Text as TextDeprecated, TextAlign } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { ArticleImageBlock } from '../../model/types/article';
import { AppImage } from '@/6shared/ui/redesigned/AppImage';
import { Skeleton } from '@/6shared/ui/deprecated/Skeleton';
import { ToggleFeatures } from '@/6shared/lib/features';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { block } = props;

    return (
        <VStack align="center">
            <AppImage
                src={block.src}
                alt={block.title}
                fallback={<Skeleton width={100} height={100} />}
            />
            {block.title && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text text={block.title} align="center" />}
                    off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
                />
            )}
        </VStack>
    );
});
