import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";

interface CardTitleProps {
    title: string;
    icon?: React.ReactNode; // Permite personalizar o ícone, opcional
    bgColor?: string; // Permite personalizar a cor de fundo
    iconColor?: string; // Permite personalizar a cor do ícone
    textColor?: string; // Permite personalizar a cor do texto
}

const BoxTitle: React.FC<CardTitleProps> = ({
    title,
    icon = <LinkIcon />,
    bgColor = "#dabfff",
    iconColor = "#7209b7",
    textColor = "#7209b7",
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: bgColor,
                color: textColor,
                borderRadius: "10px",
                minHeight: "50px",
                mb: 2,
                padding: "8px",
                fontFamily: 'Manrope'
            }}
        >
            <IconButton sx={{ color: iconColor, marginRight: "8px", borderRadius: "10px" }}>
                {icon}
            </IconButton>
            <Typography sx={{ fontWeight: 600, fontSize: 16, fontFamily: 'Manrope'}} variant="h6">
                {title}
            </Typography>
        </Box>
    );
};

export default BoxTitle;
