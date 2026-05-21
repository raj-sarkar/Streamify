import { Button } from '@components/Button';
import { styled } from '@mui/material';

export const StyledButton = styled(Button)(
    ({
        theme: {
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        width: pxToRem(64),
        height: pxToRem(30),

        [breakpoints.up('sm')]: {
            width: pxToRem(64),
            height: pxToRem(44),
        },
    }),
);
