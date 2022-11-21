import React from "react";
import { Container } from "@mui/material";
import css from "../../css/modules/pageBuilderBlocks/ContactForm.module.scss";
import FormSpreeForm from "../common/FormSpreeForm";
const ContactForm = props => {
  return (
    <div className={css.root}>
      <Container>
          <FormSpreeForm />
      </Container>
    </div>
  );
};
export default ContactForm;
