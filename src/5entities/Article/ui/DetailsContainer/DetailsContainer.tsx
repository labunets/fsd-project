import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '../..';
import { Card } from '@/6shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Card className={className} max>
            <ArticleDetails id={id} />
        </Card>
    );
});
