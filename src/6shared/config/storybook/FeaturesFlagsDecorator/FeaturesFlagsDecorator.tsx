import { StoryFn } from '@storybook/react';
import { FeatureFlags } from '@/6shared/types/featureFlags';
import { setFeatureFlags } from '@/6shared/lib/features';

export const FeaturesFlagsDecorator = (features: FeatureFlags) => (Story: StoryFn) => {
    setFeatureFlags(features);
    return <Story />;
};
