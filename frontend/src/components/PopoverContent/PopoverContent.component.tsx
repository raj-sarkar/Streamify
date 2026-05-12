import { useTheme } from '@mui/material';

import { Icon } from '@components/Icon';
import { Typography } from '@components/Typography';

import { StyledStack } from './PopoverContent.styles';
import type { PopoverContentProps } from './PopoverContent.types';

/**
 * @param props - props for popover content component
 * @param props.popoverItem - array of popover item
 * @returns component to render the popover items
 */
export const PopoverContent = (props: PopoverContentProps) => {
    const { popoverItem: item } = props;

    const theme = useTheme();

    if (!item.show) return;

    return (
        <StyledStack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            gap={2}
            onClick={() => void item.clickFunction()}
            component="button"
        >
            <Icon
                icon={item.icon}
                iconColor={theme.palette.primary.contrastText}
                data-testid="popover-icon"
            />
            <Typography variant="h3" color={theme.palette.primary.contrastText}>
                {item.text}
            </Typography>
        </StyledStack>
    );
};
