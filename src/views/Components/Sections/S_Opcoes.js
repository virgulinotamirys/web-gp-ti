import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";

import styles from "../../../assets/jss/mat-react/views/componentsSections/pillsStyle.js";
import { Book, Computer, Group } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function S_Opcoes() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Plataforma exclusiva para GIRLS POWERS da TI</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>Cursos que atendem os pré-requisitos das vagas nas empresas de tecnologia, atendendo os cenários de TI, Business e Comunicação.</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "INDISPENSÁVEL PARA VOCÊ GIRL POWER",
                    tabIcon: Book,
                    tabContent: (
                      <span>
                        <h4>
                        Cursos, workshops e mentorias direcionadas para as demandas do mercado de tecnologia.
                        </h4>
                      </span>
                    )
                  },
                  {
                    tabButton: "CONHECIMENTO ESPECÍFICO",
                    tabIcon: Computer,
                    tabContent: (
                      <span>
                        <h4>Conhecimento direcionado para as áreas e tecnologias mais atuais. Além da conexão dos cenários de Business e Comunicação.</h4>
                      </span>
                    )
                  },
                  {
                    tabButton: "EXPERIÊNCIAS ",
                    tabIcon: Group,
                    tabContent: (
                      <span>
                        <h4>A partir de mentorias, você GIRL POWER será direcionada e motivada pelas próprias referências e as MULHERES que estão no mercado de TI. </h4>
                      </span>
                    )
                  },
                  {
                    tabButton: "CARTÃO DE VISITA DAS SKILLS DA MULHER DE TI ",
                    tabIcon: Book,
                    tabContent: (
                      <span>
                        <h4>Você GIRL poderá criar seu CARTÃO DE VISITA VIRTUAL, um cartão das skills da mulher de TI.
                        Voltado para as competências da mulher, classificando essas skills em forma de <b>SELOS</b>, como de dev, projeto, etc.
                        Valorizando as skills da MULHER e mostrando que está disponível para o mercado de trabalho para as empresas parceiras na plataforma.
                        </h4>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
