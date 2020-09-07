import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";
import Button from "../../../components/CustomButtons/Button.js";


import styles from "../../../assets/jss/mat-react/views/landingPageSections/cardStyle.js";
import { Book, Computer, ArrowDownward } from "@material-ui/icons";

import skill from "../../../assets/img/card.png";


const useStyles = makeStyles(styles);

export default function Sub_Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Um canal para criar o portfólio das skills da GIRL POWER da TI</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>SOFT ou HARD SKILLS?<br/> Seu perfil com o SELO de competência da SKILL,
             mostrando que está disponível para o mercado de trabalho</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "SOFT SKILLS ",
                    tabIcon: Computer,
                    tabContent: (
                      <div>
                      <h4 className={classes.description}>As SOFT SKILLS são as habilidades comportamentais, características relacionadas a sua forma de se relacionar com as pessoas.
                      </h4>
                    </div>
                    )
                  },
                  {
                    tabButton: "HARD SKILLS ",
                    tabIcon: Book,
                    tabContent: (
                      <div>
                        <h4 className={classes.description}>As HARD SKILLS são as habilidades que você aprende em sala de aula, cursos...
                          Essas habilidades podem ser desenvolvidas na nossa plataforma, para saber mais, acesso a página de cursos.
                        </h4>
                        <Button color="rose"
                          href="/course"
                          className={classes.navLink}
                          onClick={e => e.preventDefault()}
                          round>Cursos
                        </Button>
                      </div>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} cs={12} sm={12} md={12}>
                <div className={classes.title}>
                  <h2>Trilha para elaboração do Portfólio das SKILLS da MULHER de TI</h2>
                </div>
            </GridItem>
            <GridItem>
              <img
                src={skill}
                width= "100%"
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem>
                <Button color="rose"
                    href="/"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    round><ArrowDownward className={classes.icons} />Faça seu Portfólio de SKILLS no GPTI
                </Button>
            </GridItem>
              
          </GridContainer>

        </div>
    </div>
  );
}
