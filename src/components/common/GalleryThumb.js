import React from "react";
import VizSensor from "react-visibility-sensor";
import css from "../../css/modules/pageBuilderBlocks/Gallery.module.scss";
import { Grid } from "@material-ui/core";

const GalleryThumb = ({ img, idx, handleImageCllick }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        setIsVisible(isVisible);
        // if (isVisible) {
        //   setIsVisible(true);
        // }
      }}
    >
      <div
        className={`anim-me anim-zoom-back ${isVisible && "anim-in"}`}
        style={{ transitionDelay: idx * 0.05 + "s" }}
      >
        <img
          className={css.galleryImage}
          alt={img}
          src={`${process.env.REACT_APP__AWS__BASE_DIR}files/thumbnails/${img}`}
          onClick={() => handleImageCllick(img)}
        />
      </div>
    </VizSensor>
  );
};
export default GalleryThumb;
