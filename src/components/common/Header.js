import React from "react";
import { Link } from "react-router-dom";
import { Container, IconButton, Button } from "@material-ui/core";
//import { directionsLink } from "../../config/data";
import MenuToggle from "./MenuToggle";
import styles from "../../css/modules/Header.module.scss";
import { PropTypes } from "prop-types";
var logoSrc = require("../../images/logos/t446-color.svg");

// const _ = require("lodash");

const Header = ({ settings, menuActive, handleToggleMenu }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const header_cta_text = _.find(settings, { key: "header_cta_text" });
  // const header_cta_text_disp = header_cta_text ? header_cta_text.value : null;

  const listenToScroll = () => {
    const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    const newIsScrolled = (winScroll>100);
    if (newIsScrolled!==isScrolled){
      setIsScrolled(newIsScrolled);
    }
  };
  /* GET SCROLL */
  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });

  return (
    <div className={`${styles.root} ${isScrolled ? styles.isScrolled : ''}`}>
      <Container className={styles.headerContainer}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={styles.menuToggleWrap}
          onClick={handleToggleMenu}
        >
          <MenuToggle handleToggleMenu={handleToggleMenu} menuActive={menuActive} />
        </IconButton>
        <div className={styles.logoWrap}>
          <Link to="/" onClick={() => {if (menuActive){handleToggleMenu()}}}>
            <img src={logoSrc} alt="Troop 446" className={styles.logo} />
          </Link>
        </div>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          className={`${styles.loginBtn} growLink`}
          href={process.env.REACT_APP__SCOUTBOOK_LOGIN_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Login
        </Button>
      </Container>
    </div>
  );
};
Header.propTypes = {
  settings: PropTypes.array.isRequired,
  menuActive: PropTypes.bool.isRequired,
  handleToggleMenu: PropTypes.func.isRequired,
};

export default Header;
