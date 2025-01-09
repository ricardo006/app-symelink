import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#9529ff', // Cor principal para elementos como AppBar e botões
        },
        background: {
            default: '#f8f9fa', // Cor de fundo padrão da página
        },
    },
    customStyles: {
        welcomeBox: {
            background: '#fff', // Fundo personalizado para caixas de boas-vindas
            border: '1.2px solid #f2e9fa', // Borda suave para contraste
        },
    },
});

export default lightTheme;
