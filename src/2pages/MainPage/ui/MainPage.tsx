import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/3widgets/Page';
import { Text, TextSize } from '@/6shared/ui/Text/Text';
import { StarRating } from '@/6shared/ui/StarRating/StarRating';
import { VStack } from '@/6shared/ui/Stack';
import { RatingCard } from '@/5entities/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <Text title={t('Main')} size={TextSize.L} />
            <VStack>
                <StarRating />
                <RatingCard
                    title={t('Rate your experience')}
                    feedbackTitle={t('Your feedback')}
                    hasFeedback
                    onCancel={() => {}}
                    onAccept={() => {}}
                />
            </VStack>
        </Page>
    );
};

export default MainPage;
