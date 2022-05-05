import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { styled } from "@mui/system";

const CardCustom = styled(Card)(({ theme, otherprop }) => ({
  border: otherprop.category === "work" ? "1px solid red" : "",
}));

export default function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <CardCustom elevstion={1} otherprop={note}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </CardCustom>
    </div>
  );
}
