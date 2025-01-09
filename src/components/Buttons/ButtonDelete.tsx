import React from "react";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const ButtonDelete: React.FC = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Button
            sx={{
                mb: 2,
                mr: 2,
                borderRadius: "12px",
                border: "1px solid",
                borderColor: isDarkMode ? "#1c2d3b" : "rgba(1,7,36,.1)",
                height: "40px",
                minWidth: "40px !important",
                backgroundColor: "transparent !important",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "end",
                
            }}
        >
            <Delete sx={{ color: isDarkMode ? "#ff8fa3" : "#ff0a54" }} />
        </Button>
    );
};

export default ButtonDelete;
