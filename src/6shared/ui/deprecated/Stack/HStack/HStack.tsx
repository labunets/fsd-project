import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Deprecated, using new components from redesigned folder
 * @deprecated
 */
export const HStack = (props: HStackProps) => {
    return <Flex direction="row" {...props} />;
};
