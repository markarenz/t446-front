import React from "react";
import ReactMarkdown from 'react-markdown';
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import css from "../../css/modules/pageBuilderBlocks/CtaOne.module.scss";
import VizSensor from "react-visibility-sensor";

const CtaOne = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const block = props.block;
  return (
    <div id={block.id} className={`${css.root} ${block.class}`}>
      <VizSensor
        partialVisibility
        onChange={isVisible => {
          setIsVisible(isVisible);
          // if (isVisible) {
          //     setIsVisible(true);
          // }
        }}
      >
        <Container>
          <h2
            className={`anim-me anim-zoom-back ${isVisible && "anim-in"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {block.headline}
          </h2>
          <div className="containerNarrow mb-3">
            <div
              className={`anim-me anim-from-right ${isVisible && "anim-in"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <ReactMarkdown skipHtml className={css.ctaText}>{block.text}</ReactMarkdown>
            </div>
          </div>
          <div
            className={`anim-me anim-from-below ${isVisible && "anim-in"}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <Button
              variant="outlined"
              component={Link}
              to={block.button_link}
              className={`${css.btn} growLink`}
            >
              {block.button_text}
            </Button>
          </div>
        </Container>
      </VizSensor>
    </div>
  );
};
export default CtaOne;
