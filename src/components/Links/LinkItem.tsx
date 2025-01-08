import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

interface Link {
    id: number;
    name: string;
    url: string;
}

interface LinkItemProps {
    link: Link;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const LinkItem: React.FC<LinkItemProps> = ({ link, onEdit, onDelete }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{link.name}</Typography>
                <Typography variant="body2">{link.url}</Typography>
                <Button color="primary" onClick={() => onEdit(link.id)}>
                    Editar
                </Button>
                <Button color="secondary" onClick={() => onDelete(link.id)}>
                    Excluir
                </Button>
            </CardContent>
        </Card>
    );
};

export default LinkItem;
