import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Grid } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useThemeContext } from '../contexts/ThemeContext'; // Importando o hook
import ItemsMenu from './ItemsMenu';

const LinkFlowBar: React.FC = () => {
    const theme = useTheme();
    const { toggleTheme } = useThemeContext(); // Pegando a função do contexto

    // Definir as cores com base no tema atual
    const appBarBackgroundColor = theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.main;

    return (
        <AppBar position="static" sx={{ backgroundColor: appBarBackgroundColor, boxShadow: 'none !important' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    SymeLink
                </Typography>

                <ItemsMenu />

                <IconButton color="inherit" onClick={() => {
                    console.log("Ícone clicado!");
                    toggleTheme(); // Chamando a função ao clicar
                }}>
                    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default LinkFlowBar;
