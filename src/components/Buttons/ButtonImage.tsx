import React from "react";
import { Button } from "@mui/material";
import { Image } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const ButtonImage: React.FC = () => {
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                    backgroundColor: isDarkMode ? "" : "#dbe9ee",
                    borderColor: isDarkMode ? "" : "rgba(1,7,36,.1)",
                },
            }}
        >
            <Image sx={{ 
                color: isDarkMode ? "#caf0f8" : "#456990",
                "&:hover": {
                    color: isDarkMode ? "" : "#456990",
                },
            }} />
        </Button>
    );
};

export default ButtonImage;
