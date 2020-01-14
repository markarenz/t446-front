import React from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";

import stylesHeaderStatic from "../css/modules/pageBuilderBlocks/HeaderStatic.module.scss";
import stylesCta from "../css/modules/pageBuilderBlocks/CtaOne.module.scss";
import stylesTwoColPhoto from "../css/modules/pageBuilderBlocks/TwoColPhoto.module.scss";

const Demo = () => {
  return (
    <div>
      <div
        className={stylesHeaderStatic.root}
        style={{ backgroundImage: `url(http://placekitten.com/1920/800)` }}
      >
        <Container className={stylesHeaderStatic.container}>
          <h1>Demo</h1>
        </Container>
      </div>

      <div className="py-standard">
        <Container>
          <Grid container spacing={3} style={{color: 'white'}}>
            <Grid item xs={12} sm={6}>
                <h2 className="text-color-primary">Test Title Lorem Ipsum</h2>
              <Typography>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
              <Typography>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
              <Typography>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={stylesCta.root}>
        <Container>
          <h2>Lorem ipsum dolor, sit amet.</h2>
          <div className="containerNarrow mb-3">
            <Typography className={stylesCta.ctaText}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Typography>
          </div>
          <Button variant="outlined" color="secondary" className={`growLink`}>Lorem Ipsum</Button>
        </Container>
      </div>

        <div className={`${stylesTwoColPhoto.root} py-standard`}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <img src="http://placekitten.com/600/300" alt="bsa446" />
                    </Grid>
                    <Grid item xs={12} sm={6} className="v-center">
                        <Typography className={stylesTwoColPhoto.textCol}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>

    </div>
  );
};
export default Demo;
