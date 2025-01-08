import React from "react";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Estilizando o Button para usar o pseudo-elemento ::first-letter
const CapitalizedButton = styled(Button)(({ theme }) => ({
    textTransform: 'none', // Não transforma o texto em maiúsculas por padrão
    '&::first-letter': {
        textTransform: 'uppercase !important', // Apenas a primeira letra será maiúscula
    },
    borderRadius: '20px',
    p: 2
}));

// Função para capitalizar a primeira letra
const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const menuItems = ["dashboard", "meus links", "configurações", "minha conta"];

const ItemsMenu: React.FC = () => {
    return (
        <Grid container justifyContent="center" spacing={2}>
            {menuItems.map((item, index) => (
                <Grid item key={index}>
                    <CapitalizedButton color="inherit">
                        {capitalizeFirstLetter(item)}
                    </CapitalizedButton>
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemsMenu;
