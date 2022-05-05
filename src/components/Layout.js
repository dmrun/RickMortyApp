import React from "react";
import { Drawer } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

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

export default function Layout({ children }) {
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="root">
      {/* app bar */}
      <AppBarCustom color="secondary">
        <Toolbar>
          <Typography>Welcome to the ninja notes webstie</Typography>
        </Toolbar>
      </AppBarCustom>

      {/* side drawer */}
      <DrawerCustom
        className="drawer"
        variant="permanent"
        anchor="left"
        classes={{ paper: "drawerPaper" }}
      >
        <div>
          <Typography variant="h5" className="title">
            Ninja Notes
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
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
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
