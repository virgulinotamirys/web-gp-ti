/*eslint-disable*/
import React from "react";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";


// @material-ui/icons
import { Apps, CloudDownload, Settings, Home, Book } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/mat-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          <Home className={classes.icons} /> 
        </Button>   
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="FORMAÇÃO"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/course" className={classes.dropdownLink}>
              CURSOS
            </Link>,
            <Button 
              color="primary"
              block
              onClick={() => setClassicModal(true)}>
              MENTORIA
            </Button>
          ]}
        />
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
                <h3 className={classes.modalTitle}>Mentoria</h3>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
                <div>
                  <p>Nossa equipe de GIRLS POWERS experientes no mercado tecnológico, estão preparadas para fornecer a você um direcionamento profissional e comportamental na sua FORMAÇÃO ACADÊMICA e PROFISSIONAL.
                   Agende uma mentoria e colabore com sua própria experiência, tire o medo do jargão "VOCÊ É MULHER, NÃO VAI CONSEGUIR" da sua cabeça. VOCÊ, GIRL POWER, desafie-se, te esperamos GIRL POWER DA TI.
                  </p>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Seu nome"
                          id="name"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Seu Email"
                          id="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Descrição da mentoria"
                          id="message"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.textArea
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5
                          }}
                        />
                      </GridItem>
                     
                      <GridItem xs={12} sm={12} md={4}>
                        <Button color="primary"> Enviar</Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </div>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() => setClassicModal(false)}
                  color="danger"
                  simple
                >
                  Fechar
                </Button>
              </DialogActions>
            </Dialog>
          
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/como-funciona"
          color="transparent"
          className={classes.navLink}
        >
          <Settings className={classes.icons} /> COMO FUNCIONA
        </Button>   
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/card"
          color="transparent"
          className={classes.navLink}
        >
          <Book className={classes.icons} /> PORTFÓLIO DE SKILLS 
        </Button>   
      </ListItem>
      
      
    </List>
  );
}
