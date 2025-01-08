import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import LinkItem from "./LinkItem";

interface Link {
    id: number;
    name: string;
    url: string;
}

interface LinkListProps {
    links: Link[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const LinkList: React.FC<LinkListProps> = ({ links, onEdit, onDelete }) => {
    return (
        <Grid container spacing={2}>
            {links.map((link) => (
                <Grid item xs={12} key={link.id}>
                    <LinkItem link={link} onEdit={onEdit} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
};

export default LinkList;
