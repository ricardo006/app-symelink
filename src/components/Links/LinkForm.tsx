import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Grid, Typography, IconButton } from "@mui/material";
import { Link as LinkIcon } from '@mui/icons-material'; // Ícone de link
import { useTheme } from '@mui/material/styles';

interface Link {
    id: number;
    name: string;
    url: string;
}

interface LinkFormProps {
    link?: Link; // Se passado, será um formulário de edição
    onSave: (link: Link) => void;
}

const LinkForm: React.FC<LinkFormProps> = ({ link, onSave }) => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const theme = useTheme(); 

    useEffect(() => {
        if (link) {
            setName(link.name);
            setUrl(link.url);
        }
    }, [link]);

    const handleSave = () => {
        const newLink = { id: link?.id ?? Date.now(), name, url };
        onSave(newLink);
        setName("");
        setUrl("");
    };
    

    return (
        <Box sx={{
                padding: '16px',
                backgroundColor: theme.customStyles.welcomeBox.background,
                color: theme.palette.text.primary,
                borderRadius: '20px',
                textAlign: 'left',
                minHeight: '180px',
                border: theme.customStyles.welcomeBox.border,
                boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', 
                mt: 2
            }}>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#dabfff',
                color: '#7209b7',
                borderRadius: '10px',
                minHeight: '50px',
                mb: 2,
                verticalAlign: 'middle',
                padding: '8px'
            }}>
                <IconButton sx={{ color: '#7209b7', marginRight: '8px' }}>
                    <LinkIcon />
                </IconButton>
                <Typography variant="h6">Criar Links</Typography>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                        label="Url"
                        variant="outlined"
                        fullWidth
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </Grid>

                <Grid item>
                    <Button variant="contained" onClick={handleSave}>
                        {link ? "Atualizar" : "Cadastrar"}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LinkForm;
