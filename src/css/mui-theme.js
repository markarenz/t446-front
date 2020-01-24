import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: { main: '#CE1126', contrastText: '#fff' },
    secondary: { main: '#FFCC00', contrastText: '#333' },
    white: {main: '#fff', contrastText: '#fff'}
};

const typography = {
    "body1": {
        "color": "#e6e6e6",
        "fontFamily": "'Proxima Nova', helvetica, sans-serif",
        "lineHeight": 1.3,
        "fontSize": 18,
        "fontWeight": 400,
        "marginTop": 0,
        "marginBottom": 16,
    }
}
const overrides = {
    MuiButton: {
        root: {
        },
        outlined: {
            borderWidth: 2,
        },
        outlinedSecondary: {
            borderWidth: 2,
        },
    },
    MuiAppBar: {
        root: {
            zIndex: 1,
        },
    },
    MuiOutlinedInput: {
        root: {
            '&:not($disabled):not($focused):not($error) $notchedOutline': {
                borderColor: 'white',
                borderWidth: 1,
                color: 'white',
            },
            '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                borderColor: 'white',
                borderWidth: 1,
                color: 'white',
            },
        },
        input: {
            color: 'white',
        }
    },
};

const themeName = 'T446 v1';

export default createMuiTheme({ overrides, palette, typography, themeName });
