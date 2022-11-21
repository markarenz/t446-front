import React from "react";
import { Container, Grid } from "@mui/material";
import css from "../../css/modules/pageBuilderBlocks/TwoColPhoto.module.scss";
import VizSensor from "react-visibility-sensor";

const TwoColPhoto = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const block = props.block;
  // html, photo, align, tcol
  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        // setIsVisible(isVisible);
        if (isVisible) {
          setIsVisible(true);
        }
      }}
    >
      <div id={block.id} className={`${css.root} ${block.class}`}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className="v-center">
              <img
                src={`${process.env.REACT_APP__AWS__BASE_DIR}files/${block.photo}`}
                alt="BSA Troop 446"
                className={`responsive-img ${
                  css.img
                } anim-me anim-from-right ${isVisible && "anim-in"}`}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="v-center">
              <div
                className={`default-text ${css.textCol}`}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </VizSensor>
  );
};
export default TwoColPhoto;
