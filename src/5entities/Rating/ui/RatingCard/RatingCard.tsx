import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card as CardDeprecated } from '@/6shared/ui/deprecated/Card';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { StarRating, StarRatingSize } from '@/6shared/ui/redesigned/StarRating';
import { Modal } from '@/6shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/6shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { Drawer } from '@/6shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Input } from '@/6shared/ui/redesigned/Input';
import { Button } from '@/6shared/ui/redesigned/Button';
import { Card } from '@/6shared/ui/redesigned/Card';

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
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Feedback')}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Feedback')}
                    />
                </>
            }
        />
    );

    const content = (
        <VStack align="center">
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text title={starsCount ? t('Thanks for your rating!') : title} />}
                off={<TextDeprecated title={starsCount ? t('Thanks for your rating!') : title} />}
            />
            <StarRating selectedStars={rate} size={StarRatingSize.M} onSelect={onSelectStars} />
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack align="center">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack justify="between">
                                    <Button
                                        data-testid="RatingCard.Close"
                                        variant="outlined"
                                        onClick={cancelHandler}
                                    >
                                        {t('Cancel')}
                                    </Button>
                                    <Button
                                        data-testid="RatingCard.Send"
                                        variant="outlined"
                                        onClick={acceptHandler}
                                    >
                                        {t('Send')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack justify="between">
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Close"
                                        theme={ButtonTheme.SECONDARY}
                                        onClick={cancelHandler}
                                    >
                                        {t('Cancel')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Send"
                                        theme={ButtonTheme.PRIMARY}
                                        onClick={acceptHandler}
                                    >
                                        {t('Send')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
                    <VStack align="center">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button
                                    data-testid="RatingCard.Send"
                                    onClick={acceptHandler}
                                    variant="outlined"
                                    fullWidth
                                >
                                    {t('Send')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    data-testid="RatingCard.Send"
                                    onClick={acceptHandler}
                                    theme={ButtonTheme.PRIMARY}
                                    fullWidth
                                >
                                    {t('Send')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </VStack>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card className={className} max data-testid="RatingCard">
                    {content}
                </Card>
            }
            off={
                <CardDeprecated className={className} max data-testid="RatingCard">
                    {content}
                </CardDeprecated>
            }
        />
    );
});
