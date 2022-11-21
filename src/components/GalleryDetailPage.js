import React from "react";
import { Grid, Button } from '@mui/material';
import { Link, useLocation } from "react-router-dom";
import HelmetDisp from "./common/HelmetDisp";
import { PropTypes } from "prop-types";
import { usePageTracking } from "../utlilities/usePageTracking";

// IMPORT BLOCKS
import Gallery from "./pageBuilderBlocks/Gallery.pagebloock";
import HeaderStatic from "./pageBuilderBlocks/HeaderStatic.pageblock";
import Spacer from "./pageBuilderBlocks/Spacer.pageblock";

const _ = require("lodash");

const GalleryDetailPage = ({
  galleries,
  setTopModalActive,
  setTopModalContent
}) => {
  const location = useLocation();
  usePageTracking();
  const slug = location.pathname.replace(/^\/+/, "");
  const gallery = _.find(galleries, { slug: slug.replace("gallery/", "") });
  if (!gallery || !gallery.title) {
    return <h1>OH NO!</h1>;
  }
  const images = JSON.parse(gallery.images);
  const main_image = images[0];
  const defaultImage = `${process.env.REACT_APP__AWS__BASE_DIR}files/${main_image}`;
  const block = {
    title: "Gallery",
    slug: "gallery",
    status: 1,
    images: JSON.stringify(images)
  };
  const headerStaticBlock = {
    type: "header-static",
    id: "",
    class: "",
    headline: gallery.title,
    subheadline: "",
    photo: "page-headers--gallery.jpg"
  };
  return (
    <div id="gallery">
      <>
        <HelmetDisp
          title={gallery.title}
          description={`A gallery for "${gallery.title}"`}
          date_modified={gallery.date_modified}
          image={defaultImage}
          pubDate={gallery.pubDate}
        />
        <HeaderStatic block={headerStaticBlock} />
        <Spacer block={{spaces:1}}/>
        <Gallery
          block={block}
          gallery={gallery}
          setTopModalActive={setTopModalActive}
          setTopModalContent={setTopModalContent}
        />
        <Spacer block={{spaces:1}}/>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Button variant="outlined" color="secondary" component={Link} to="/gallery">More Galleries</Button>
          </Grid>
        </Grid>
        <Spacer block={{spaces:1}}/>
      </>
    </div>
  );
};

GalleryDetailPage.propTypes = {
  location: PropTypes.shape({
    pathName: PropTypes.string
  }),
  settings: PropTypes.array.isRequired,
  galleries: PropTypes.array.isRequired,
  setTopModalActive: PropTypes.func,
  setTopModalContent: PropTypes.func,
};
export default GalleryDetailPage;
