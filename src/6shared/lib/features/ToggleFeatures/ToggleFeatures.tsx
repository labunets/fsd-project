import { ReactElement } from 'react';
import { FeatureFlags } from '@/6shared/types/featureFlags';
import { getFeatureFlag } from '../lib/setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    // return on;
    return off;
};
