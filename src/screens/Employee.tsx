import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExitToApp,
  MarkunreadMailboxOutlined,
  MeetingRoom,
  Pause,
  PersonOutlined,
  PlayArrow,
  Timer
} from "@material-ui/icons";
import { ButtonGroup, Typography } from "@material-ui/core";
import useClockInOut from "../myHooks/useClockInOut";

function styledBy(color: string, param2: { default: string; blue: string }) {
  return undefined;
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  empleado: {
    margin: theme.spacing(1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  botonera: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: styledBy("color", {
      default: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      blue: "0 3px 5px 2px rgba(33, 203, 243, .3)"
    })
  },
  bttngrp: {
    fontSize: "10px",
    border: 0,
    color: "#C51162"
  }
}));

export default function Employee() {
  const classes = useStyles();
  const { clockIn, pauseOut, pauseIn, clockInOut, clockOut } = useClockInOut();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Typography variant="subtitle1">Empleado: {/*selectedValue*/}</Typography>

        <form className={classes.form} noValidate>
          <Button
            fullWidth
            className={classes.botonera}
            startIcon={<ExitToApp/>}
            onClick={clockIn}
          >
            Entrada</Button>
          <Button
            fullWidth
            className={classes.botonera}
            startIcon={<Pause/>}
            onClick={pauseIn}
          >
            Pausa</Button>
          <Button
            fullWidth
            className={classes.botonera}
            startIcon={<PlayArrow/>}
            onClick={pauseOut}
          >
            Volver</Button>
          <Button
            fullWidth
            className={classes.botonera}
            startIcon={<MeetingRoom/>}
            onClick={clockOut}
          >
            Salida</Button>

          <ButtonGroup fullWidth>
            <Button
              startIcon={<Timer/>}
              className={classes.bttngrp}>
              Jornada Laboral</Button>
            <Button
              startIcon={<MarkunreadMailboxOutlined/>}
              className={classes.bttngrp}>
              Buzón de avisos</Button>
            <Button
              startIcon={<PersonOutlined/>}
              className={classes.bttngrp}>
              Perfil</Button>
          </ButtonGroup>

        </form>
      </div>

    </Container>
  );
}