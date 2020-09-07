import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import S_WomanSaiba from "./Sections/S_WomanSaiba.js";
import S_Opcoes from "./Sections/S_Opcoes.js";
import S_Depoimentos from "./Sections/S_Depoimentos.js";
import S_Comecar from "./Sections/S_Comecar.js";
import S_Down_Emp from "./Sections/S_Down_Emp.js";

import styles from "../../.././src/assets/jss/mat-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Girls Powers da TI"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/banner-woman-mod.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Mulheres na Tecnologia</h1>
                <h3 className={classes.subtitle}>
                  Motivadas pelo objetivo de fazer a diferença no cenário tecnológico, proporcionando capacitação dirigida e cartão de visita para GIRLS POWERS serem inseridas no mercado de trabalho.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <S_WomanSaiba />
        <S_Opcoes />
        <S_Comecar />
        <S_Depoimentos />
        <S_Down_Emp />
      </div>
      <Footer />
    </div>
  );
}
