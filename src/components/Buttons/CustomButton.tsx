import React from 'react';
import { Button, ButtonProps } from '@mui/material';

const CustomButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            sx={{
                borderRadius: '12px !important',
                boxShadow: 'none !important',
                color: '#fff',
                fontWeight: 500,
                fontFamily: 'Manrope',
                p: 1,
                textTransform: 'none',
                backgroundColor: '#9529ff',
                '&:hover': {
                    backgroundColor: '#7209b7',
                },
                ...props.sx, // Permite sobrescrever estilos via props
            }}
            {...props}
        />
    );
};

export default CustomButton;
