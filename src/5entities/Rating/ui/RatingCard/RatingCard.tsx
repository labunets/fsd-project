import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Card } from '@/6shared/ui/Card/Card';
import { HStack, VStack } from '@/6shared/ui/Stack';
import { Text } from '@/6shared/ui/Text/Text';
import { StarRating, StarRatingSize } from '@/6shared/ui/StarRating/StarRating';
import { Modal } from '@/6shared/ui/Modal/Modal';
import { Input } from '@/6shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/6shared/ui/Button/Button';
import { Drawer } from '@/6shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

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
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack align="center">
                <Text title={title} />
                <StarRating size={StarRatingSize.M} onSelect={onSelectStars} />
                <BrowserView>
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack align="center">
                            {modalContent}
                            <HStack justify="between">
                                <Button theme={ButtonTheme.SECONDARY} onClick={cancelHandler}>
                                    {t('Cancel')}
                                </Button>
                                <Button theme={ButtonTheme.PRIMARY} onClick={acceptHandler}>
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
                            <Button onClick={acceptHandler} theme={ButtonTheme.PRIMARY} fullWidth>
                                {t('Send')}
                            </Button>
                        </VStack>
                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    );
});
