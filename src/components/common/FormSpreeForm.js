import React from "react";
import { Grid, Button, OutlinedInput, InputLabel } from "@material-ui/core";
import css from "../../css/modules/pageBuilderBlocks/ContactForm.module.scss";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mzbeypgk"
        method="POST"
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel>Email:</InputLabel>
            <OutlinedInput type="email" name="email" className={css.formInput}/>
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Message:</InputLabel>
            <OutlinedInput type="text" name="message" className={css.formInput} multiline rows={4}/>
          </Grid>
          <Grid item xs={12} align="center">
            {status === "SUCCESS" ? (
              <p>Thanks!</p>
            ) : (
              <Button variant="contained" type="submit" color="primary">
                Submit
              </Button>
            )}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </Grid>
        </Grid>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
