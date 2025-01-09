import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const WelcomeUser: React.FC = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Box
            sx={{
                padding: '16px',
                backgroundColor: theme.customStyles.welcomeBox.background,
                color: theme.palette.text.primary,
                borderRadius: '20px',
                textAlign: 'left',
                minHeight: '180px',
                border: isDarkMode ? "1px solid #1c2d3b" : "1px solid #f2e9fa",
            }}
        >
            <Typography variant="h4">Olá User</Typography>
        </Box>
    );
};

export default WelcomeUser;
