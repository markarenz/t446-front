import React from "react";
// import { Controller, Scene } from 'react-scrollmagic';
import css from "../../css/modules/pageBuilderBlocks/HeaderStatic.module.scss";
import { Container } from "@material-ui/core";
import VizSensor from "react-visibility-sensor";

const HeaderStatic = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const block = props.block;
  return (
    <div
      id={block.id}
      className={`${css.root} ${block.class && block.class}`}
      style={{
        backgroundImage: `url(${process.env.REACT_APP__AWS__BASE_DIR}files/${block.photo})`
      }}
    >
      <VizSensor
        partialVisibility
        onChange={isVisible => {
          // setIsVisible(isVisible)
          if (isVisible) {
            setIsVisible(true);
          }
        }}
      >
        <Container className={css.container}>
          <h1 className={`anim-me anim-from-right ${isVisible && "anim-in"}`} style={{transitionDelay: '0.25s'}}>
            {block.headline}
          </h1>
          {block.subheadline !== "" && (
            <h2 className={`anim-me anim-from-right ${isVisible && "anim-in"}`} style={{transitionDelay: '0.5s'}}>
              {block.subheadline}
            </h2>
          )}
        </Container>
      </VizSensor>
    </div>
  );
};
export default HeaderStatic;
