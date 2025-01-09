import React, { useState } from "react";
import { Avatar, Box, Button, Grid, Typography, IconButton } from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import CustomTextField from "../TextFields/CustomTextField";
import CustomButton from "../Buttons/CustomButton";
import { Visibility, Delete, Image } from '@mui/icons-material';
import BoxTitle from "../BoxTitle/BoxTitle";
import ButtonDelete from "../Buttons/ButtonDelete";
import ButtonImage from "../Buttons/ButtonImage";
import ButtonVisible from "../Buttons/ButtonVisible";

interface Field {
    name: string;
    url: string;
}

const LinkForm: React.FC = () => {
    const [fields, setFields] = useState<Field[]>([{ name: "", url: "" }]);
    const theme = useTheme();

    const isDarkMode = theme.palette.mode === "dark";

    const handleAddFields = () => {
        setFields([...fields, { name: "", url: "" }]);
    };

    const handleFieldChange = (index: number, fieldName: keyof Field, value: string) => {
        const updatedFields = [...fields];
        updatedFields[index][fieldName] = value;
        setFields(updatedFields);
    };

    return (
        <Box
            sx={{
                p: "20px",
                backgroundColor: isDarkMode ? "#011627" : "#fff",
                color: isDarkMode ? "#fff" : theme.palette.text.primary,
                borderRadius: "20px",
                minHeight: "180px",
                border: isDarkMode ? "1px solid #1c2d3b" : "1px solid #f2e9fa",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
        >
            <BoxTitle
                title="Meus Links"
                bgColor={isDarkMode ? "#342272" : "#f2ebfb"}
                textColor={isDarkMode ? "#f8f9fa" : "#9529ff"}
                iconColor={isDarkMode ? "#f8f9fa" : "#9529ff"}
                icon={<LinkIcon />}
            />

            {fields.map((field, index) => (
                <Grid container spacing={2} key={index}>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label={`Nome ${index + 1}`}
                            value={field.name}
                            onChange={(e) => handleFieldChange(index, "name", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label={`Url ${index + 1}`}
                            value={field.url}
                            onChange={(e) => handleFieldChange(index, "url", e.target.value)}
                        />
                    </Grid>

                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        sx={{
                            m: '2px 0px 2px 2px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: '20px',
                        }}
                    >

                        <Avatar
                            sx={{
                                width: 50, 
                                height: 50, 
                                borderRadius: '16px',
                                marginRight: "20px",
                                backgroundColor: "#263238", 
                                mb: 2
                            }}
                            variant="rounded"
                            alt="Imagem do Link"
                            src="https://via.placeholder.com/150" // Substitua com a URL da sua imagem
                        />

                        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                            <ButtonImage />
                            <ButtonVisible />
                            <ButtonDelete />
                        </Box>
                    </Grid>
                </Grid>
            ))}

            <Grid item xs={12} sx={{ mt: 5, display: 'flex', justifyContent: 'flex-end' }}>
                <CustomButton onClick={handleAddFields}>Adicionar link</CustomButton>
            </Grid>
        </Box>
    );
};

export default LinkForm;
