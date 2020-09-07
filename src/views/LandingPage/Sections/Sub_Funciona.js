import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/mat-react/views/landingPageSections/workStyle.js";
import image from "../../../assets/img/esquema.jpeg";


const useStyles = makeStyles(styles);

export default function Sub_Funciona() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={10}>
          <h3 className={classes.description}>
          Por onde começar? Oferecemos um guia de nivelamento de aprendizado de acordo com seu conhecimento.
          E preenchendo os requisitos mínimos das vagas nas empresas de tecnologias. 
          </h3><br/>
          <p className={classes.description}>
            A partir do MEGA HACK WOMEN 2020, estamos criando esse site integrado com a plataforma GPTI, um jogo. 
            Voltada para você GIRL POWER, que precisa de um direcionamento na sua carreira, ajuda nas suas habilidades técnicas e comportamentais.
            De acordo com os pré-requisitos das vagas nas empresas, é feito uma trilha de aprendizado por meio da plataforma para você aprender de acordo com seu nivel de conhecimento.
          </p>
          <p className={classes.description}>
            Além disso, você GIRL poderá criar seu CARTÃO DE VISITA VIRTUAL. O GPTI, o cartão das skills da mulher de TI.
            Voltado para as competências da mulher, onde você GIRL POWER, poderá classificar suas competências, um <b>SELO</b> de competência de SKILLS.
            Valorizando suas skills e mostrando que está disponível para o mercado de trabalho para as empresas parceiras na plataforma.
          </p><br/>
          <img
            src={image}
            width= "100%"
            alt="..."
            className={classes.imgRounded + " " + classes.imgFluid}
          />
         
        </GridItem>
      </GridContainer>
    </div>
  );
}
