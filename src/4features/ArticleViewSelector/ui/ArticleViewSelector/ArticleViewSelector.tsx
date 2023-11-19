import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import GridIcon from '@/6shared/assets/icons/outline-grid.svg';
import ListIcon from '@/6shared/assets/icons/outline-list.svg';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/5entities/Article';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Card } from '@/6shared/ui/redesigned/Card';
import { HStack } from '@/6shared/ui/redesigned/Stack';
import { Button } from '@/6shared/ui/redesigned/Button';

interface ArticleViewSelectorProps {
    className?: string;
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
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <HStack gap="1">
                        {viewTypes.map((viewType) => (
                            <Button
                                variant="clear"
                                onClick={onClick(viewType.view)}
                                active={viewType.view === view}
                                key={viewType.view}
                                className={
                                    viewType.view === view
                                        ? cls.standard
                                        : cls.pointer
                                }
                                beforeIcon={viewType.icon}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <HStack justify="end" max={false}>
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            theme={ButtonTheme.TERTIARY}
                            onClick={onClick(viewType.view)}
                            active={viewType.view === view}
                            key={viewType.view}
                            className={
                                viewType.view === view
                                    ? cls.standard
                                    : cls.pointer
                            }
                        >
                            {viewType.icon}
                        </ButtonDeprecated>
                    ))}
                </HStack>
            }
        />
    );
});
