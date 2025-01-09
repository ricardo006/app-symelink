import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Edit, Article as ArticleIcon, Delete, Link as LinkIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import BoxTitle from '../BoxTitle/BoxTitle';
import ButtonDelete from '../Buttons/ButtonDelete';
import ButtonEdit from '../Buttons/ButtonEdit';

interface Page {
    id: number;
    name: string;
}

interface PagesProps {
    pages: Page[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const Pages: React.FC<PagesProps> = ({ pages, onEdit, onDelete }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Box
            sx={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#011627' : '#fff',
                color: theme.palette.text.primary,
                borderRadius: '20px',
                textAlign: 'left',
                minHeight: '180px',
                border: `1px solid ${isDarkMode ? '#1c2d3b' : '#f2e9fa'}`,
                fontFamily: 'Manrope'
            }}
        >
            <BoxTitle
                title="Minhas Páginas"
                bgColor={isDarkMode ? "#342272" : "#f2ebfb"}
                textColor={isDarkMode ? "#f8f9fa" : "#9529ff"}
                iconColor={isDarkMode ? "#f8f9fa" : "#9529ff"}
                icon={<ArticleIcon />}
            />

            {pages.map((page) => (
                <Box
                    key={page.id}
                    sx={{
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        mb: 2,
                        p: 2,
                        border: `1px solid ${isDarkMode ? '#1c2d3b' : '#f2e9fa'}`,
                        borderRadius: '12px',
                        backgroundColor: isDarkMode ? '#011627' : '#fff',
                    }}
                >
                    <Typography variant="h6" sx={{ fontFamily: 'Manrope', fontSize: 16, fontWeight: 500, flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        {page.name}
                    </Typography>

                    <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
                        <ButtonEdit />
                        <ButtonDelete />
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Pages;
