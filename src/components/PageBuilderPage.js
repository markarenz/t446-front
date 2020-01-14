import React from "react";
import { withRouter } from "react-router-dom";
import HelmetDisp from "./common/HelmetDisp";
import { PropTypes } from "prop-types";

// IMPORT BLOCKS
import BlockNotFound from "./pageBuilderBlocks/BlockNotFound.pageblock";
import OneCol from "./pageBuilderBlocks/OneCol.pageblock";
import HeaderStatic from "./pageBuilderBlocks/HeaderStatic.pageblock";
import TwoCol from "./pageBuilderBlocks/TwoCol.pageblock";
import PullQuote from "./pageBuilderBlocks/PullQuote.pageblock";
import CtaOne from "./pageBuilderBlocks/CtaOne.pageblock";
import TwoColPhoto from "./pageBuilderBlocks/TwoColPhoto.pageblock";
import Announcements from "./pageBuilderBlocks/Announcements.pageblock";
import Calendar from "./pageBuilderBlocks/Calendar.pageblock";
import Gallery from "./pageBuilderBlocks/Gallery.pagebloock";
import HeaderSlider from "./pageBuilderBlocks/HeaderSlider.pageblock";

const _ = require("lodash");

const PageBuilderPage = ({
  location,
  pages,
  alerts,
  galleries,
  setTopModalActive,
  setTopModalContent
}) => {
  const slug =
    location.pathname === "/" ? "home" : location.pathname.replace(/^\/+/, "");
  const defaultImage = "";
  const unfoundPageObj = {
    title: "404: Content Not Found",
    metadesc: "",
    slug: "404",
    status: 1,
    content:
      '[{ "type": "page-header-orange", "id": "", "title": "", "class": "", "headline": "Four Oh Four", "subhead": "Content Not Found", "photo": "mms-page-headers-03.jpg"},{ "type": "1-col-dark", "id": "text-1", "title": "Text 1", "class": "", "html": "<h2>The content you are looking for cannot be found here.</h2><h3>Using the back button is probably your best bet.</h3>"}, { "type": "cta-1", "id": "cta-1", "title": "CTA 1", "class": "", "headline": "Do Not Miss Out", "subhead": "Keep up to date with the latest project updates and industry news.", "photo": "cta-bg.jpg", "buttonLabel": "Learn More", "buttonLink": "/blog"}]'
  };
  const foundPageObj = _.find(pages, { slug: slug });
  const pageObj = foundPageObj ? foundPageObj : unfoundPageObj;
  let pageContent = "";
  if (pageObj.title) {
    pageContent = JSON.parse(pageObj.content).map((block, i) => {
      switch (block.type) {
        case "1-col":
          return <OneCol key={i} block={block} />;
        case "2-col":
          return <TwoCol key={i} block={block} />;
        case "pull-quote":
          return <PullQuote key={i} block={block} />;
        case "header-static":
          return <HeaderStatic key={i} block={block} />;
        case "cta-one":
          return <CtaOne key={i} block={block} />;
        case "2-col-photo":
          return <TwoColPhoto key={i} block={block} />;
        case "announcements":
          return <Announcements key={i} block={block} alerts={alerts} />;
        case "calendar":
          return <Calendar key={i} block={block} />;
        case "header-slider":
          return (
            <HeaderSlider
              key={i}
              block={block}
              gallery={galleries.find(item => item.slug === block.gallery_slug)}
            />
          );
        case "gallery":
          return (
            <Gallery
              key={i}
              block={block}
              gallery={galleries.find(item => item.slug === block.slug)}
              setTopModalActive={setTopModalActive}
              setTopModalContent={setTopModalContent}
            />
          );
        default:
          return <BlockNotFound key={i} block={block} />;
      }
    });
  }
  return (
    <div id="page">
      {pages.length > 0 ? (
        <>
          <HelmetDisp
            title={pageObj.title}
            description={pageObj.metadesc}
            date_modified={pageObj.date_modified}
            image={defaultImage}
            pubDate={pageObj.pubDate}
          />
          {pageContent}
        </>
      ) : null}
    </div>
  );
};
PageBuilderPage.propTypes = {
  location: PropTypes.shape({
    pathName: PropTypes.string
  }),
  settings: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  alerts: PropTypes.array.isRequired,
  galleries: PropTypes.array.isRequired
};
export default withRouter(PageBuilderPage);
