import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
 
import styles from "../../../assets/jss/mat-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/img/faces/tayse.jpeg";
import team2 from "../../../assets/img/faces/maria.png";
import team3 from "../../../assets/img/faces/marina.png";

import { LinkedIn } from "@material-ui/icons";


const useStyles = makeStyles(styles);

export default function S_Depoimentos() {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Depoimentos das nossas GIRLS POWERS DA TI</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Tayse Virgulino Ribeiro
                <br />
                <small className={classes.smallTitle}>Gerente de Desenvolvimento de Sistemas</small><br/>
              </h4>
              <a href="https://br.linkedin.com/in/tayse-virgulino-ribeiro" className={classes.block}
              target="_blank"><LinkedIn className={classes.icon}/></a> 
              <CardBody>
                <p className={classes.description}>
                  Olá GIRLS. Me chamo Tayse Virgulino Ribeiro, tenho 25 anos e atualmente sou Gerente de Desenvolvimento de Sistemas na Agência de Tecnologia do Estado do Tocantins. 
                  Possuo mais de 6 anos de experiência na área de Engenharia de Software. Desde 2014 trabalho com gerenciamento de projetos. Neste trajeto, já atuei como Desenvolvedora, Analista de Banco de Dados, Líder de Projetos, Gerente de Projetos, Gestora de Desenvolvimento e Professora. Possuo graduação em Sistemas de Informação pelo Centro Universitário Luterano de Palmas (2018). 
                  Sou bolsista mestranda da Universidade Federal de Pernambuco. 
                  Tenho experiência na área de Ciência da Computação, com ênfase em Engenharia de Software, atuando principalmente nos seguintes temas: processos de desenvolvimento de software, engenharia de software, informática na educação.
                  Neste tempo de experiência, algumas informações importantes:
                  Não deixem de fazer algo que gostem, por uma opinião ou receio de menos que alguém. O Currículo também não diz tudo, faça seu currículo e saiba fazer o que diz fazer.
                </p>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Maria Cristina Rakoski
                <br />
                <small className={classes.smallTitle}>Professora de Informática/Tecnologias para Educação no Instituto Federal Farroupilha – Campus Santa Rosa</small><br/>
              </h4>
              <a href="https://www.linkedin.com/in/maria-cristina-rakoski-45239467/" className={classes.block}
              target="_blank"><LinkedIn className={classes.icon}/></a> 
              <CardBody>
                <p className={classes.description}>
                É visto que o público feminino ainda ocupa um lugar pequeno no mercado da tecnologia.  Não é muito comum ver mulheres que se identifiquem com as carreiras tecnológicas. Ainda parece que hardware e software não combinam com as meninas! Para muitos, parece que somos somente usuárias de redes sociais, apps e aparelhos digitais, mas estamos trabalhando para mudar essa visão e aumentar nossa participação nessa área! 
                Temos muitos desafios ainda para serem vencidos, mas também excelentes oportunidades. Existe um déficit muito grande de profissionais nessa área, isso leva o mercado a entender que é preciso nos incluir nesse ramo de trabalho e mostrar o nosso potencial!
                Cito algumas mulheres, as Tech Ladies, que fizeram e fazem história nessa área:
                Ada Lovelace — criadora do primeiro algoritmo da história;
                Grace Murray Hopper - Conhecida como a Rainha da Computação;
                Susan Wojciki — CEO do YouTube;
                Maria Fernanda Teixeira: vice-presidente da Extreme Digital Solutions (EDS) no Brasil;
                Sulamita Garcia: responsável pelo projeto LinuxChix Brasil, projetista de software da Cyclades Corporation;
                Penso que com a escassez e a demanda de profissionais, a tendência é que as organizações tenham consciência da importância do público feminino nesse processo!
                Abraço a todas e sucesso!
                </p>
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Marina Minichelli
                <br />
                <small className={classes.smallTitle}>Analista de Gente e Gestão</small><br/>
              </h4>
              <a href="https://www.linkedin.com/in/marinaminichelli/" className={classes.block}
              target="_blank"><LinkedIn className={classes.icon}/></a> 
              <CardBody>
                <p className={classes.description}>
                Onde estão as mulheres que trabalham com tecnologia?
                Recentemente encarei o desafio de contratar apenas mulheres para o nosso time de desenvolvimento. "Desafio dado, é desafio cumprido" - pensei comigo. Como a boa feminista e entusiasta que sou, fui um pouco além e pensei "Por que não criar um banco de talentos exclusivo para mulheres (independentemente da identidade de gênero) que trabalham com tecnologia?"

                Pois bem, iniciei o processo de divulgação e a busca pelos talentos. De maneira habitual, iniciei o hunting através de indicadores booleanos e em segundos veio o retorno do LinkedIn - "1,3 mil+ pesquisas no recruiter".

                E assim começou o processo de triagem, página 01, 02, 03... apenas perfis de homens. Alinhando curiosidade (e necessidade), dediquei o dia para realizar essa triagem inicial.

                Concluídas 40 páginas (limite que o Linkedin liberou) - o que deu o equivalente a 1.000 perfis, sabem quantos perfis de mulheres eu identifiquei?

                <b>84</b>.

                Vocês não leram errado, 84 perfis de 1.000.
                Foi MUITO assustador esse resultado, e agora eu questiono "Onde estão as mulheres que trabalham com tecnologia?" 
                </p>
              </CardBody>
            </Card>
          </GridItem>


        </GridContainer>
      </div>
      </div>
  );
}