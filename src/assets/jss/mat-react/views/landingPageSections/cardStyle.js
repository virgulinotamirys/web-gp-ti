import { title } from "../../../mat-react.js";

const cardStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"

  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    textAlign: "justify"
  },
  description: {
    color: "#999",
    fontSize: "1.313rem",
    textAlign: "justify"
  },
  item:{
    paddingBottom: "30px"
  }
};

export default cardStyle;
