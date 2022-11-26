import React from "react";
import ReactMarkdown from 'react-markdown';
import { Grid, Container } from "@mui/material";
import css from "../../css/modules/pageBuilderBlocks/Gallery.module.scss";
import GalleryThumb from "../common/GalleryThumb";

const Gallery = ({ gallery, block, setTopModalContent, setTopModalActive }) => {
  if (!gallery) return null;
  if (!gallery.images) return null;
  const images = JSON.parse(gallery.images);
  const handleImageCllick = img => {
    setTopModalContent(img);
    setTopModalActive(true);
  };
  return (
    <div id={block.id} className={`${css.root} ${block.class}`}>
      <Container>
        {
          gallery?.content && (
            <div>
              <ReactMarkdown skipHtml>
                {gallery.content}
              </ReactMarkdown>
            </div>
          )
        }
        <Grid container spacing={3}>
          {images.map((img, idx) => (
            <Grid item xs={12} sm={4} key={idx} align="center">
              <GalleryThumb
                img={img}
                idx={idx}
                handleImageCllick={handleImageCllick}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Gallery;
