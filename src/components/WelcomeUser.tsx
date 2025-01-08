import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const WelcomeUser: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                padding: '16px',
                backgroundColor: theme.customStyles.welcomeBox.background,
                color: theme.palette.text.primary,
                borderRadius: '20px',
                textAlign: 'left',
                minHeight: '180px',
                border: theme.customStyles.welcomeBox.border,
                boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            }}
        >
            <Typography variant="h4">Olá User</Typography>
        </Box>
    );
};

export default WelcomeUser;
