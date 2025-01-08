import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        customStyles: {
            welcomeBox: {
                background: string;
                border: string;
            };
            capitalizeFirst: React.CSSProperties; // Adicionando a propriedade `capitalizeFirst`
        };
    }

    interface ThemeOptions {
        customStyles?: {
            welcomeBox?: {
                background?: string;
                border?: string;
            };
            capitalizeFirst?: React.CSSProperties; // Aqui também
        };
    }
}
