import { classNames } from '6shared/lib/classNames/classNames';
import { memo } from 'react';
import GridIcon from '6shared/assets/icons/outline-grid.svg';
import ListIcon from '6shared/assets/icons/outline-list.svg';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: <GridIcon />,
    },
    {
        view: ArticleView.LIST,
        icon: <ListIcon />,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.TERTIARY}
                    onClick={onClick(viewType.view)}
                    active={viewType.view === view}
                    key={viewType.view}
                >
                    {viewType.icon}
                </Button>
            ))}
        </div>
    );
});
