import React from "react";
import { useLocation } from 'react-router-dom';
import HelmetDisp from "./common/HelmetDisp";
import { PropTypes } from "prop-types";
import { usePageTracking } from "../utlilities/usePageTracking";

// IMPORT BLOCKS
import BlockNotFound from "./pageBuilderBlocks/BlockNotFound.pageblock";
import OneCol from "./pageBuilderBlocks/OneCol.pageblock";
import HeaderStatic from "./pageBuilderBlocks/HeaderStatic.pageblock";
import TwoCol from "./pageBuilderBlocks/TwoCol.pageblock";
import PullQuote from "./pageBuilderBlocks/PullQuote.pageblock";
import CtaOne from "./pageBuilderBlocks/CtaOne.pageblock";
import TwoColPhoto from "./pageBuilderBlocks/TwoColPhoto.pageblock";
import Announcements from "./pageBuilderBlocks/Announcements.pageblock";
import CalendarMini from "./pageBuilderBlocks/CalendarMini.pageblock";
import CalendarFull from "./pageBuilderBlocks/CalendarFull.pageblock";
import Gallery from "./pageBuilderBlocks/Gallery.pagebloock";
import HeaderSlider from "./pageBuilderBlocks/HeaderSlider.pageblock";
import Spacer from "./pageBuilderBlocks/Spacer.pageblock";
import GalleriesList from "./pageBuilderBlocks/GalleriesList.pagebloock";
import ContactForm from "./pageBuilderBlocks/ContactForm";
const _ = require("lodash");

const PageBuilderPage = ({
  pages,
  alerts,
  galleries,
  setTopModalActive,
  setTopModalContent
}) => {
  const location = useLocation();
  usePageTracking();
  // useEffect(() => {
  //   const description = document.querySelector('meta[name="description"]');
  //   if (description) {
  //     description.remove();
  //   }
  // });
  const slug =
    location.pathname === "/" ? "home" : location.pathname.replace(/^\/+/, "").replace(/\/$/, "");
  const defaultImage = "";
  const unfoundPageObj = {
    title: "404: Content Not Found",
    metadesc: "",
    slug: "404",
    status: 1,
    content:
      '[{"type":"header-static","id":"","class":"","headline":"404","subheadline":"Page not found","photo":"t446-header-eagles-01.jpg"},{"type":"spacer","id":"","class":"","spaces":"1"},{"type":"1-col","id":"","class":"text-center","html":"<h2>Your content was not found at this URL. Please return to the homepage and try again or use the menu to navigate to the desired content.</h2>"},{"type":"spacer","id":"","class":"","spaces":"1"}]'
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
        case "contact-form":
          return <ContactForm key={i} />;
        case "calendar":
          if (block.num_show > 0) return <CalendarMini key={i} block={block} />;
          return <CalendarFull key={i} block={block} />;
        case "galleries-list":
          return (
            <GalleriesList
              key={i}
              block={block}
              galleries={galleries}
              setTopModalActive={setTopModalActive}
              setTopModalContent={setTopModalContent}
            />
          );
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
        case "spacer":
          return <Spacer key={i} block={block} />;
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
            dateModified={pageObj.dateModified}
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
  settings: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  alerts: PropTypes.array.isRequired,
  galleries: PropTypes.array.isRequired
};
export default PageBuilderPage;
