import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const HelmetDisp = ({ title, description, image, date_modified }) => {
  const titleMain = title + " | " + process.env.REACT_APP__SITE_TITLE;
  return (
    <Helmet>
      <title>{titleMain}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={window.location.origin.toString()} />
      <meta
        property="og:image"
        content={window.location.origin.toString() + "/images/" + image}
      />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@markmakessuff" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@Swatchity" />
      <meta
        name="twitter:image:src"
        content={window.location.origin.toString() + "/images/" + image}
      />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={window.location.origin.toString()} />
      <meta
        property="og:image"
        content={window.location.origin.toString() + "/images/" + image}
      />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Swatchity.com" />
      <meta property="article:published_time" content={date_modified} />
      <meta property="article:modified_time" content={date_modified} />
    </Helmet>
  );
};

HelmetDisp.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date_modified: PropTypes.string.isRequired
};

export default HelmetDisp;
