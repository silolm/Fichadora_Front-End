import React from "react";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import SidebarNav from "./components/sidebarNav";
import "./styles.css";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: any) => ({
  drawer: {
    width: 240,
  },
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

interface IProps {
  className?: string
  onClose?: (param?: any) => any
  open: boolean
  variant: "permanent" | "persistent" | "temporary" | undefined
}

const Sidebar = ({ open, variant, onClose, className }: IProps) => {
  const classes = useStyles();

  const pages = [
    {
      title: "Login",
      href: "/LogIn",
      icon: <DashboardIcon/>
    },
    {
      title: "Signup",
      href: "/SignUp",
      icon: <PeopleIcon/>
    },
    {
      title: "Employee",
      href: "/employee",
      icon: <ShoppingBasketIcon/>
    },
    {
      title: "Authentication",
      href: "/sign-in",
      icon: <LockOpenIcon/>
    },
    {
      title: "Typography",
      href: "/typography",
      icon: <TextFieldsIcon/>
    },
    {
      title: "Icons",
      href: "/icons",
      icon: <ImageIcon/>
    },
    {
      title: "Account",
      href: "/account",
      icon: <AccountBoxIcon/>
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsIcon/>
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        className={clsx(classes.root, className)}
      >
        <Divider className={classes.divider}/>
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};


export default Sidebar;
