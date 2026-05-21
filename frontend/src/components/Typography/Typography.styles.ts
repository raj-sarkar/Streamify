import { Typography as MuiTypography, styled } from '@mui/material';
import type { typographyProps } from './Typography.types';

const customProps: PropertyKey[] = ['lines'];

export const StyledTypogray = styled(MuiTypography, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<typographyProps>(({ theme: { mixins }, lines = 5 }) => ({
    ...mixins.lineClamp(lines),
}));
