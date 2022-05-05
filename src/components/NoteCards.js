import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { createTheme, styled, ThemeProvider } from "@mui/system";
import { blue, green, pink, yellow, brown } from "@mui/material/colors";

const CardCustom = styled(Card)(({ theme, otherprop }) => ({
  border: otherprop.category === "work" ? "1px solid red" : "",
}));

const AvatarCustom = styled(Avatar)(({ note }) => ({
  color: ((volume) => {
    return brown[volume];
  })(500),
  backgroundColor:
    note.category === "work"
      ? yellow[700]
      : note.category === "money"
      ? green[500]
      : note.category === "todos"
      ? pink[500]
      : blue[500],
}));

export default function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <CardCustom elevstion={1} otherprop={note}>
        <CardHeader
          avatar={
            <AvatarCustom note={note}>
              {note.category[0].toUpperCase()}
            </AvatarCustom>
          }
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
