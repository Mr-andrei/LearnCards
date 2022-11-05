import { createTheme } from '@mui/material';

export const customTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: 8,
                    boxShadow: 'none',

                    fontFamily: 'Poppins, sans serif',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '20px',
                    textTransform: 'none',
                    '&.MuiButton-sizeLarge': {
                        padding: '14px 24px',
                    },
                    '&.MuiButton-sizeMedium': {
                        padding: '10px 24px',
                    },
                    '&.MuiButton-sizeSmall': {
                        padding: '6px 24px',
                    },
                },
            },
        },

        MuiCssBaseline: {
            styleOverrides: {
                '& *, *::before, *::after': {
                    boxSizing: 'border-box',
                    margin: '0',
                    padding: '0',
                },
                body: {
                    height: '100%',
                    margin: '0',
                    padding: '0',
                    paddingRight: '0',
                    boxSizing: 'border-box',
                    overflow: 'auto',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    margin: '3px 0 0 0 ',
                },
            },
        },
        MuiTextField: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        width: '100%',
                    },
                },
            ],
        },
    },
});
