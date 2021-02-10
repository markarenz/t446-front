import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import css from "../../css/modules/pageBuilderBlocks/Gallery.module.scss";

const GalleriesList = ({
  galleries,
  block,
  setTopModalContent,
  setTopModalActive
}) => {
  const [curPage, setCurPage] = React.useState(0);
  const itemsPerPage = 9;
  const filteredGalleries = galleries.filter(
      item =>
          item.slug !== "home-slider" && item.slug !== "home-gallery"
  );
  const maxPage = Math.ceil(filteredGalleries.length / itemsPerPage);
  if (!galleries) return null;
  const handlePrev = () => {
    setCurPage(curPage - 1);
  };
  const handleNext = () => {
    setCurPage(curPage + 1);
  };
  return (
    <div id={block.id} className={`${css.galleryList} ${block.class}`}>
      <Container>
        <Grid container spacing={3} className="grid-center">
          {filteredGalleries.sort((a, b) => { if (a.pub_date > b.pub_date) { return -1; } if (a.pub_date < b.pub_date) { return 1; } return 0; })
              .slice((curPage * itemsPerPage), (curPage * itemsPerPage + itemsPerPage))
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
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          {
            (curPage > 0) && <Button variant="outlined" color="secondary" onClick={handlePrev} style={{ margin: ' 0 10px' }}>Prev</Button>
          }
          {
            (curPage < (maxPage - 1)) && <Button variant="outlined" color="secondary" onClick={handleNext} style={{ margin: ' 0 10px' }}>Next</Button>
          }
        </div>
      </Container>
    </div>
  );
};
export default GalleriesList;
