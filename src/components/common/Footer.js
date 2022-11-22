import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Button
} from "@mui/material";
import { Facebook as IconFacebook } from "@mui/icons-material";
import ScoutMessaging from "./ScoutMessaging";
import { facebookLink } from "../../config/data";
import footerBg from '../../images/footer-bg.jpg';
import styles from "../../css/modules/Footer.module.scss";
import logoSrc from '../../images/logos/t446-color.svg';

const Footer = () => {
  return (
    <footer className={styles.root} style={{ backgroundImage: `url(${footerBg})`}}>
      <div className={styles.mainRow}>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4} className={styles.footerCol}>
              <Link to="/">
                <img src={logoSrc} alt="Troop 446" className={styles.logo} />
              </Link>
              <Typography className={styles.locator}>
                Troop Meetings: Mondays @7pm
                <br />
                <a
                  href="https://www.google.com/maps/dir//Saint+Simon+the+Apostle+Church,+8155+Oaklandon+Rd,+Indianapolis,+IN+46236/@39.9050833,-85.9552112,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x886b4ac94527cddf:0xe35bfc7ce9806ced!2m2!1d-85.9552112!2d39.9050833!3e0"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Map"
                >
                  St. Simon the Apostle Catholic Church Parish Life Center
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} className={styles.footerCol}>
              <ScoutMessaging />
            </Grid>
            <Grid item xs={12} sm={4} className={styles.footerCol}>
              <h2>
                Follow Us
                <IconButton>
                  <a
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.fbLink}
                  >
                    <IconFacebook className={`${styles.fbIcon} growLink`} />
                  </a>
                </IconButton>
              </h2>
              <div className="mb-3">
                <Link to="/contact">
                  <Button variant="outlined" color="secondary" className={`growLink`}>
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="mb-3">
                <a
                  href="https://www.crossroadsbsa.org/"
                  rel="noreferrer noopener"
                >
                  <img
                    src="/img/bsa-rev.svg"
                    alt="Scouts BSA Crossroads of America Council"
                    className={`${styles.logoCouncil} growLink`}
                  />
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.copyrightRow}>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} className={styles.copyright}>
              &copy;{new Date().getYear() + 1900} All Rights Reserved - Troop
              446, Indianapolis, IN
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
