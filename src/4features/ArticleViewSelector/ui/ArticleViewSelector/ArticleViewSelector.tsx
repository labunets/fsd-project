import { memo } from 'react';
import GridIcon from '@/6shared/assets/icons/outline-grid.svg';
import ListIcon from '@/6shared/assets/icons/outline-list.svg';
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { HStack } from '@/6shared/ui/deprecated/Stack';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/5entities/Article';

interface ArticleViewSelectorProps {
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: <GridIcon className={cls.svg} />,
    },
    {
        view: ArticleView.LIST,
        icon: <ListIcon className={cls.svg} />,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { view, onViewClick } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <HStack justify="end" max={false}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.TERTIARY}
                    onClick={onClick(viewType.view)}
                    active={viewType.view === view}
                    key={viewType.view}
                    className={
                        viewType.view === view ? cls.standard : cls.pointer
                    }
                >
                    {viewType.icon}
                </Button>
            ))}
        </HStack>
    );
});
