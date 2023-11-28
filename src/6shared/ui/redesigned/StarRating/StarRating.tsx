import { memo, useState } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/6shared/assets/icons/filled-star.svg';
import { toggleFeatures } from '@/6shared/lib/features';

export enum StarRatingSize {
    S = 'small',
    M = 'medium',
    L = 'large',
}

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: StarRatingSize;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = StarRatingSize.S, selectedStars = 0 } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(selectedStars);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((starNumber) => (
                <StarIcon
                    key={starNumber}
                    className={classNames(
                        toggleFeatures({
                            name: 'isAppRedesigned',
                            on: () => cls.starIconRedesigned,
                            off: () => cls.starIcon,
                        }),
                        { [cls.selected]: isSelected },
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal, cls[size]],
                    )}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    );
});
