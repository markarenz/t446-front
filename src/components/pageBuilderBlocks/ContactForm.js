import React from "react";
import { Container } from "@mui/material";
import css from "../../css/modules/pageBuilderBlocks/ContactForm.module.scss";
import FormSpreeForm from "../common/FormSpreeForm";
import texture from '../../images/textures/texture-02.jpg';

const ContactForm = props => {
  return (
    <div className={css.root} styles={{ backgroundImage: `url(${texture})`}}>
      <Container>
          <FormSpreeForm />
      </Container>
    </div>
  );
};
export default ContactForm;
