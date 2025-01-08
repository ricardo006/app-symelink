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
            background: '#fbfaff', // Fundo personalizado para caixas de boas-vindas
            border: '1.2px solid #ddc4f5', // Borda suave para contraste
        },
    },
});

export default lightTheme;
