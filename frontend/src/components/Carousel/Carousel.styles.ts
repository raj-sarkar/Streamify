import { styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box as MuiBox, Stack as MuiStack } from '@mui/material';

export const StyledContainer = styled(MuiBox)(({ }) => ({
    width: '100%',
    position: 'relative',
    borderRadius: 4,
    overflow: 'hidden',
}));

export const StyledOverlay = styled(MuiBox)(({ }) => ({
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to right, rgba(2,6,23,0.95) 20%, rgba(2,6,23,0.6) 45%, rgba(2,6,23,0.1) 100%)`,
}));

export const StyledContent = styled(MuiStack)(({ theme: { breakpoints } }) => ({
    position: 'absolute',
    top: '50%',
    left: 20,
    transform: 'translateY(-50%)',
    maxWidth: 500,
    zIndex: 2,
    [breakpoints.up('sm')]: {
        left: 32,
    },
    [breakpoints.up('md')]: {
        left: 56,
        maxWidth: 560,
    },
}));

export const StyledSwiper = styled(Swiper)(({ theme: { breakpoints } }) => ({
    width: '90vw',
    overflow: 'hidden',

    '& .swiper-wrapper': {
        alignItems: 'stretch',
    },

    '& .swiper-slide': {
        display: 'flex',
        alignItems: 'stretch',
    },

    '& .swiper-pagination': {
        bottom: '20px !important',
        textAlign: 'left',
        paddingLeft: '16px',
        [breakpoints.up('sm')]: {
            paddingLeft: '40px',
        },
    },

    '& .swiper-pagination-bullet': {
        width: '10px',
        height: '10px',
        background: '#ffffff',
        opacity: 0.4,
    },

    '& .swiper-pagination-bullet-active': {
        opacity: 1,
        background: '#38bdf8',
    },
}));

export const StyledSlide = styled(SwiperSlide)(
    ({ theme: { breakpoints } }) => ({
        display: 'flex',
        position: 'relative',
        width: '100%',
        minHeight: 260,
        borderRadius: 4,
        overflow: 'hidden',
        [breakpoints.up('sm')]: {
            minHeight: 360,
        },
        [breakpoints.up('md')]: {
            minHeight: 520,
        },
    }),
);
