import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/img/faces/tamirys.jpg";
import profile1 from "../../assets/img/faces/Manuela.jpeg";
import profile2 from "../../assets/img/faces/Francieli.jpg";
import profile3 from "../../assets/img/faces/Luana.jpeg";
import profile4 from "../../assets/img/faces/andrea.jpeg";

import styles from "../../assets/jss/mat-react/views/profilePage.js";
import { LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function S_Equipe(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Girls Powers da TI"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../../../src/assets/img/people-woman.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center" > 
                <GridItem xs={12} sm={12} md={4}  >
                  <div className={classes.profile} >
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Tamirys Virgulino Ribeiro Prado</h3>
                      <h6>Full Stack Developer </h6>
                      <a href="https://linkedin.com/in/tamirys-virgulino-ribeiro-prado-msc-97801054" className={classes.block}
                      target="_blank"><LinkedIn className={classes.icon}/></a> <br/>
                      <p>Tocantinense, bacharela em Sistemas de Informação (UniCatólica - TO), mestre em Sistemas e Computação (IME/RJ) e amante da robótica.</p><br/>
                    </div>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile1} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Manuela Hermes</h3>
                      <h6> Consultora Empresarial </h6>
                      <a href="/" className={classes.block}
                      target="_blank"><LinkedIn className={classes.icon}/></a> <br/>
                      <p>Mestre em desenvolvimento direto de Porto Belo com um olhar de marketing que faz a diferença.</p><br/>
                    </div>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile2} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Francieli Zanella</h3>
                      <h6> Gestão financeira e processos. </h6>
                      <a href="/" className={classes.block}
                      target="_blank"><LinkedIn className={classes.icon}/></a> <br/>
                      <p>ADM, gaúcha, apaixonada por histórias de vida e negócios. </p><br/>
                    </div>
                  </div>
                </GridItem>
            </GridContainer>
          </div>
        </div><br/><br/><br/><br/><br/>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile3} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Luana Porto</h3>
                      <h6>Acadêmica de Sistemas de Informação</h6>
                      <a href="https://linkedin.com/in/tamirys-virgulino-ribeiro-prado-msc-97801054" className={classes.block}
                      target="_blank"><LinkedIn className={classes.icon}/></a> <br/>
                      <p>Paulista, acadêmica de SI, em busca do empoderamento das mulheres na tecnologia. </p><br/>
                    </div>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile4} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Andréa Bujnicki Vieira</h3>
                      <h6> Mestre em Desenvolvimento e Docente </h6>
                      <a href="/" className={classes.block}
                      target="_blank"><LinkedIn className={classes.icon}/></a> <br/>
                      <p>Gaúcha, mestre em Desenvolvimento e antenada a todas as questões de inovação.</p><br/>
                    </div>
                  </div>
                </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
