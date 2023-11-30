import { FeatureFlags } from '@/6shared/types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/6shared/const/localstorage';

const defaultFeatureFlags: FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featureFlags: FeatureFlags = {
    ...defaultFeatureFlags,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
