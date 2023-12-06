import { StoryFn } from '@storybook/react';
import { setFeatureFlags } from '@/6shared/lib/features';
import { getAllFeatureFlags } from '@/6shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (Story: StoryFn) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
        <div className="app_redesigned">
            <Story />
        </div>
    );
};
