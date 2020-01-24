import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import css from "../../css/modules/pageBuilderBlocks/Gallery.module.scss";

const GalleriesList = ({
  galleries,
  block,
  setTopModalContent,
  setTopModalActive
}) => {
  if (!galleries) return null;
  console.log(galleries);
  // const galleryDisplay = gallery.images
  // console.log("SMFT", gallery);
  // console.log(images.length);
  return (
    <div id={block.id} className={`${css.galleryList} ${block.class}`}>
      <Container>
        <Grid container spacing={3} className="grid-center">
          {galleries
            .filter(
              item =>
                item.slug !== "home-slider" && item.slug !== "home-gallery"
            )
            .map((gallery, idx) => {
              const images = JSON.parse(gallery.images);
              const main_image = images[0];
              return (
                <Grid item xs={12} sm={4} key={idx} align="center">
                  <Link to={`gallery/${gallery.slug}`}>
                    <h2 className={css.galleryListTitle}>{gallery.title}</h2>
                  </Link>
                  <Link to={`gallery/${gallery.slug}`}>
                    <img
                      className={css.galleryImage}
                      alt={gallery.title}
                      src={`${process.env.REACT_APP__AWS__BASE_DIR}files/thumbnails/${main_image}`}
                    />
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};
export default GalleriesList;
