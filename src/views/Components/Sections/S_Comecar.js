import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";

import Book from "@material-ui/icons/Book";

import styles from "../../../assets/jss/mat-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function S_Comecar() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Não sabe por onde iniciar? </h2><br/>
            <h3>Formação seguindo os pré-requisitos mínimos exigidos pela maioria das empresas no mercado de TI.</h3>
            <h4>
              Cursos, workshops e mentorias que atendem seu nível de conhecimento e engloba ambos cenários, tanto da tecnologia, como business e comunicação.
              No qual, você MULHER obterá os requisitos principais para ingressar em uma vaga de emprego no mercado de TI e conseguir a proposta salarial que está nivelada com suas skills.
            </h4><br/>
            <Button color="primary"
              href="/course"
              className={classes.navLink}
              round>
                <Book className={classes.icons} />Cursos
              </Button> 
          </GridItem>
        </GridContainer>

      </div>
    </div>
  );
}
