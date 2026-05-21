import { useTheme } from '@mui/material';
import type { typographyProps } from './Typography.types';
import { StyledTypogray } from './Typography.styles';

/**
 * Typography wrapper with optional line clamping.
 * @param props - Component props
 * @returns JSX element
 */
export const Typography = (props: typographyProps) => {
    const { color, lines, ...rest } = props;
    const theme = useTheme();

    return (
        <StyledTypogray
            color={color ? color : theme.palette.primary.contrastText}
            lines={lines}
            {...rest}
        />
    );
};
