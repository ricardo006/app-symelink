import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#200c64', // Cor da AppBar
        },
        background: {
            default: '#011627', // Cor de fundo da página
        },
    },
    customStyles: {
        welcomeBox: {
            background: '#011627',
            border: '1.2px solid #1c2d3b',
        }
    },
});

export default darkTheme;
