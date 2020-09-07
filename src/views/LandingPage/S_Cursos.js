import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/mat-react/views/landingPage.js";

import Button from "../../components/CustomButtons/Button.js";


// Sections for this page
import Sub_Curso from "./Sections/Sub_Curso.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function S_Cursos(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Girls Powers da TI"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../../src/assets/img/curso.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Cursos, Workshops e Mentorias</h1><br/>
              <Button color="rose"
                href="/"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Inscreva-se
              </Button>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Sub_Curso />
        </div>
      </div>
      <Footer />
    </div>
  );
}
