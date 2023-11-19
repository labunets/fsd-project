import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/6shared/ui/deprecated/Card';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { Text } from '@/6shared/ui/deprecated/Text';
import { StarRating, StarRatingSize } from '@/6shared/ui/deprecated/StarRating';
import { Modal } from '@/6shared/ui/deprecated/Modal';
import { Input } from '@/6shared/ui/deprecated/Input';
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { Drawer } from '@/6shared/ui/redesigned/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        onAccept?.(starsCount, feedback);
        setIsModalOpen(false);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        onCancel?.(starsCount);
        setIsModalOpen(false);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Your feedback')}
                label={t('Message')}
                value={feedback}
                onChange={setFeedback}
                data-testid="RatingCard.Input"
            />
        </>
    );

    return (
        <Card className={className} max data-testid="RatingCard">
            <VStack align="center">
                <Text
                    title={starsCount ? t('Thanks for your rating!') : title}
                />
                <StarRating
                    selectedStars={rate}
                    size={StarRatingSize.M}
                    onSelect={onSelectStars}
                />
                <BrowserView>
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack align="center">
                            {modalContent}
                            <HStack justify="between">
                                <Button
                                    data-testid="RatingCard.Close"
                                    theme={ButtonTheme.SECONDARY}
                                    onClick={cancelHandler}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    data-testid="RatingCard.Send"
                                    theme={ButtonTheme.PRIMARY}
                                    onClick={acceptHandler}
                                >
                                    {t('Send')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
                        <VStack align="center">
                            {modalContent}
                            <Button
                                data-testid="RatingCard.Send"
                                onClick={acceptHandler}
                                theme={ButtonTheme.PRIMARY}
                                fullWidth
                            >
                                {t('Send')}
                            </Button>
                        </VStack>
                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    );
});
