import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";


import styles from "../../../assets/jss/mat-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function S_WomanSaiba() {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>As Mulheres na Tecnologia</h2>
            <h4>
              <p>A inserção das mulheres no mercado de tecnologia ainda é uma barreira a ser quebrada,
              sendo assim, visando empoderar a mulher nesse universo e ampliar a participação neste mercado,
              estamos desenvolvendo um projeto que tem o foco em suprir as demandas das organizações.</p>
              <p>Segundo o IBGE, no Brasil, apenas 20% das profissionais de TI são mulheres. 
                A pior parte é que elas recebem em média 34% menos que os homens. Nós queremos mudar esse cenário e
                envolver cada vez mais mulheres.</p>
          </h4>
        </div>
        <div id="buttons">
          <GridContainer justify="">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary"
                href="/como-funciona"
                className={classes.navLink}
                round>
                <Favorite className={classes.icons} />Saiba mais
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
