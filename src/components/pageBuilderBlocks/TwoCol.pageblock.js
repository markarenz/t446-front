import React from "react";
import { Container, Grid } from "@mui/material";
import css from "../../css/modules/pageBuilderBlocks/general.module.scss";
import VizSensor from "react-visibility-sensor";

const TwoCol = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const block = props.block;
  const content1 = block.html1
    .split("\n\n")
    .join("<br /><br />")
    .split("anim-me")
    .join("");
  const content2 = block.html2
    .split("\n\n")
    .join("<br /><br />")
    .split("anim-me")
    .join("");
  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        // setIsVisible(isVisible)
        if (isVisible) {
          setIsVisible(true);
        }
      }}
    >
      <div id={block.id} className={`${css.root} ${block.class}`}>
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={`anim-me anim-from-left ${isVisible && "anim-in"}`}
            >
              <div
                className="default-text text-editor-output"
                dangerouslySetInnerHTML={{ __html: content1 }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={`anim-me anim-from-right ${isVisible && "anim-in"}`}
            >
              <div
                className="default-text text-editor-output"
                dangerouslySetInnerHTML={{ __html: content2 }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </VizSensor>
  );
};
export default TwoCol;
