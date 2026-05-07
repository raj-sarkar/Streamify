import type { PaletteOptions } from '@mui/material/styles';

import { THEME_MODES } from '@constant';

const tealPalette = {
    primary: {
        main: '#7DA78C',
        dark: '#35858E',
        light: '#C2D099',
        contrastText: '#E6EEC9',
    },
    grey: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
    },
    background: {
        default: '#FFFFFF',
    },
};

const darkPalette = {
    primary: {
        main: '#262626',
        // dark: '#2D3250',
        light: '#323232',
        contrastText: '#E2E8CE',
    },
    secondary: {
        main: '#A3D977',
    },
    grey: {
        50: '#111827',
        100: '#1F2937',
        200: '#374151',
        300: '#4B5563',
        400: '#6B7280',
        500: '#9CA3AF',
        600: '#D1D5DB',
        700: '#E5E7EB',
        800: '#F3F4F6',
        900: '#F9FAFB',
    },
    background: {
        default: '#000000',
    },
};

export const getPalette = (
    mode: (typeof THEME_MODES)[number],
): PaletteOptions => {
    return mode === 'teal' ? tealPalette : darkPalette;
};
