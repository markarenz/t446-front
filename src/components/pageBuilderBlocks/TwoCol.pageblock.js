import React from "react";
import ReactMarkdown from 'react-markdown';
import { Container, Grid } from "@mui/material";
import css from "../../css/modules/pageBuilderBlocks/general.module.scss";
import VizSensor from "react-visibility-sensor";

const TwoCol = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const block = props.block;
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
              <ReactMarkdown
                skipHtml
                className="default-text text-editor-output"
              >
                {block.html1}
              </ReactMarkdown>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={`anim-me anim-from-right ${isVisible && "anim-in"}`}
            >
              <ReactMarkdown
                skipHtml
                className="default-text text-editor-output"
              >
                {block.html2}
              </ReactMarkdown>
            </Grid>
          </Grid>
        </Container>
      </div>
    </VizSensor>
  );
};
export default TwoCol;
