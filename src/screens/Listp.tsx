import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ListItem } from "../components/listItem";
import { Container } from "@material-ui/core";
import "../components/listItem/styles.scss";

const hardcode = [
  {
    DNI: "03151484R",
    name: "mario",
    lastName: "silla"
  },
  {
    DNI: "03151484R",
    name: "Paco",
    lastName: "silla"
  },
  {
    DNI: "03151484R",
    name: "Ramon",
    lastName: "silla"
  }];

export default function Listp() {
  return (
    <Container component="main" id='container'>
      {hardcode.map(item => <ListItem DNI={item.DNI} lastName={item.lastName} name={item.name}/>)}
    </Container>
  );
}
