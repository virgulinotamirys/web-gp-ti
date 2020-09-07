import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Button from "../../../components/CustomButtons/Button.js";
import Money from "@material-ui/icons/Money";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";




import styles from "../../../assets/jss/mat-react/views/landingPageSections/productStyle.js";
import { Computer, Business, Cloud, DataUsage, Book } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function Sub_Curso() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s go GIRLS POWERS</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Cursos de Front End"
              description="HTML5, CSS, ReactJS, Angular, JS, JQUERY, e muito mais... "
              icon={Computer}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Curso de Programação Back End"
              description="Python, Php, Java, NodeJS, Ruby, e muito mais..."
              icon={Computer}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Curso de Lógica de Programação"
              description="Lógica, Operadores, Tomada de decisão, Fluxo de execução, e muito mais..."
              icon={Computer}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Curso de Mobile"
              description="Flutter, React Native, iOS e Swift, Android e Kotlin, e mais..."
              icon={Computer}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Curso de Infraestrutura"
              description="DevOps e Git, Cloud, Linux, IoT, Redes, e mais..."
              icon={Cloud}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Curso de Design e UX"
              description="Photoshop e Illustrator, Usabilidade e UX, Vídeo e Motion, 3D, e mais..."
              icon={Computer}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Curso de Data Science"
              description="SQL e Banco de Dados, NoSQL, Data Science, Machine Learning, BI, Estatística, Excel, e mais..."
              icon={DataUsage}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Curso de Inovação e Business"
              description="Métodos Ágeis, Softskills, Liderança e Gestão, Startups e Empreendedorismo, Vendas, e mais..."
              icon={Business}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.item}>
            <InfoArea
              title="Inglês"
              description="Inglês básico, intermediário, vocabulário e muito mais..."
              icon={Book}
              iconColor="primary"
              vertical
            />
            <Button color="rose"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Saiba mais
            </Button>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" className={classes.section}><br/><br/>
          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Button 
              color="info"
              block
              onClick={() => setClassicModal(true)}
              round
            >
              <Money className={classes.icon} />
              PREÇO
            </Button>
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal
              }}
              open={classicModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setClassicModal(false)}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
              >
                <IconButton
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={() => setClassicModal(false)}
                >
                  <Close className={classes.modalClose} />
                </IconButton>
                <h3 className={classes.modalTitle}>Investimento</h3>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
                <div>
                  <p>Uma plataforma por assinatura, com o objeto de trazer para você GIRL POWER o conhecimento direcionado para o mercado de trabalho e aquela vaga almejada.
                    O investimento é o valor abaixo referenciado, assinado ao baixar a plataforma. Experimente e conquiste seu espaço no mercado de trabalho.
                  </p>
                  <div className={classes.typo}>
                    <h2>R$ 29,90</h2>
                  </div>
                </div>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
              <Button color="primary"
                href="#"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                round>Matricule-se</Button>
                <Button
                  onClick={() => setClassicModal(false)}
                  color="danger"
                  simple
                >
                  Fechar
                </Button>
              </DialogActions>
            </Dialog>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
