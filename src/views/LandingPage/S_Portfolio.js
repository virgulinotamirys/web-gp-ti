import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import styles from "../../assets/jss/mat-react/views/landingPage.js";

import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import Sub_Portfolio from "./Sections/Sub_Portfolio.js";


const dashboardRoutes = [];


const useStyles = makeStyles(styles);

export default function S_Portfolio(props) {
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
      <Parallax filter image={require("../../../src/assets/img/card.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Portfólio Virtual de SKILLS da GIRL POWER</h1>
              <br />
              <h3 className={classes.subtitle}>
              Portfólio das <i>softs</i> e <i>hards skills</i>. 
              </h3>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Sub_Portfolio />
        </div>
      </div>
      <Footer />
    </div>
  );
}
