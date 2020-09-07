/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Quote from "../../../components/Typography/Quote.js";

// core components
import styles from "../../../assets/jss/mat-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function S_Down_Emp() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Venha experimentar nossa plataforma.</h2>
            <h4>
              Baixe nosso app no link abaixo e seja uma GIRL POWER pronta para o mercado de tecnologia. 
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href=""
              target="_blank"
            >
              Free Download GIRL POWER DA TI
            </Button>
          </GridItem>
        </GridContainer>
        <br/><br/>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
          <div className={classes.typo}>
              <h2>Para a sua EMPRESA</h2>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Desenvolvemos GIRLS POWERS com as SKILLS que a SUA empresa precisa.</div>
            <Quote
              text="Para as EMPRESAS, construímos uma trilha especial com base nas skills desejadas, garantindo assim, que a empresa encontre a GIRL POWER ideal para suprir a demanda."
            />
          </div>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
