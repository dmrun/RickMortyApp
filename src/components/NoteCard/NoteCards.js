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
  // border: char === "work" ? "2px solid blue" : "",
  // border: "2px solid blue",
  height: "300px",
}));
// const bgAv ={
//   '': yellow[700]
// }

const AvatarCustom = styled(Avatar)(({ char }) => ({
  // color: ((volume) => {
  //   return brown[volume];
  // })(500),
  backgroundColor:
    // char.category === "work"
    //   ? yellow[700]
    //   :
    char.gender === "Male"
      ? blue[500]
      : char.gender === "Female"
      ? pink[500]
      : brown[500],
}));

export default function charCard({ char, handleDelete }) {
  const originSpecies = `${char.species} - ${char.origin.name}`;
  const nameStatus = `${char.name} (${char.status})`;

  return (
    <div>
      <CardCustom elevation={1} otherprop={char} style={{}}>
        <CardHeader
          avatar={
            <AvatarCustom char={char}>
              {char.gender[0].toUpperCase()}
            </AvatarCustom>
          }
          action={
            <IconButton onClick={() => handleDelete(char.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={nameStatus}
          subheader={originSpecies}
        />
        <CardMedia
          component="img"
          height="194"
          image={char.image}
          alt="Paella dish"
          style={{ height: "100%" }}
        />
        {/* <CardContent>
          <Typography variant="body2" color="textSecondary">
            {char.details}
          </Typography>
        </CardContent> */}
      </CardCustom>
    </div>
  );
}
