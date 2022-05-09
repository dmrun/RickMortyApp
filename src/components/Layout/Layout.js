import React from "react";
import { Drawer } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { createTheme, styled, ThemeProvider } from "@mui/system";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { format } from "date-fns";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;
//ExtraCustomCSS
const DrawerCustom = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
}));
const AppBarCustom = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
}));
const ElemsCustom = styled("div")(({ theme }) => ({
  minHeight: 70,
}));

const themeCustom = createTheme({});

const AvatarCustom = styled(Avatar)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

export default function Layout({ children }) {
  const menuItems = [
    {
      text: "Characters",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Episode",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/episode",
    },
    {
      text: "Location",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/location",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="root">
      {/* app bar */}
      <AppBarCustom color="primary" elevation={0}>
        <Toolbar>
          <Typography className="date">
            Today is the {format(new Date(), "do MMMM Y")}.
          </Typography>
          <Typography>Rick</Typography>
          <ThemeProvider theme={themeCustom}>
            <AvatarCustom src="./rickmorty.png" alt="M" />
          </ThemeProvider>
        </Toolbar>
      </AppBarCustom>

      {/* side drawer */}
      <DrawerCustom
        className="drawer"
        variant="permanent"
        anchor="left"
        classes={{ paper: "drawerPaper" }}
      >
        <div style={{ borderBottom: "1px solid rgb(25, 118, 210)" }}>
          <Typography variant="h6" className="title" color="primary">
            Rick & Morty Wiki
          </Typography>
        </div>

        {/* list / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                navigate(item.path);
              }}
              className={location.pathname === item.path ? "active" : null}
            >
              <ListItemText
                primary={item.text}
                className="navBarItem"
                color="primary"
                primaryTypographyProps={{ fontSize: "1.3vw" }}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </DrawerCustom>
      <div className="page">
        <ElemsCustom className="toolbar"></ElemsCustom>
        {children}
      </div>
    </div>
  );
}

{
  /* <List>
          <ListItem>
            <ListItemText primary="hello" />
          </ListItem>
        </List> */
}
{
  /* <ListItemIcon>{item.icon}</ListItemIcon> */
}
