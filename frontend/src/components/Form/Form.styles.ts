import { Box as MuiBox, styled } from "@mui/material";
import { Button } from "@components/Button";

export const StyledBox = styled(MuiBox)(
    ({
        theme: {
            palette,
            typography: { pxToRem },
            spacing,
        },
    }) => ({
        width: "90vw",
        margin: "auto",
        marginTop: pxToRem(100),
        padding: spacing(4,0),
        maxWidth: pxToRem(600),
        borderRadius: pxToRem(10),
        display: "flex",
        flexDirection: "column",
        gap: pxToRem(16),
        alignItems: "center",
        backgroundColor: palette.primary.main,
        boxShadow: `0 0 ${pxToRem(20)} ${palette.grey[100]}`,
    })
);

export const StyledButton = styled(Button)(
    ({
        theme: {
            typography: { pxToRem },
            palette
        },
    }) => ({
        width: "50%",
        height: pxToRem(40),
        backgroundColor: palette.secondary.main,
    })
);
