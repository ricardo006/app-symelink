import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const CustomTextField: React.FC<TextFieldProps> = (props) => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '16px',
                    fontFamily: 'Manrope !important',
                    color: '#9529ff',
                    borderColor: '#9529ff',
                },
                '& .MuiInputLabel-root': {
                    fontWeight: 500,
                    color: '#9529ff', // Cor do label
                    borderColor: '#9529ff',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#9529ff',
                },
                '& .MuiOutlinedInput-input': {
                    color: '#6e44ff', // Cor do texto dentro do input
                    '&::placeholder': {
                        color: '#6e44ff', // Cor do placeholder
                        opacity: 1, // Garante que a cor do placeholder seja visível
                    },
                },
            }}
            {...props}
        />
    );
};

export default CustomTextField;
