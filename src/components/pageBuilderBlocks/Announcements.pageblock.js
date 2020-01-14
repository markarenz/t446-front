import React from "react";
import { Grid, Container } from "@material-ui/core";
import css from "../../css/modules/pageBuilderBlocks/Announcements.module.scss";

const Announcements = props => {
  const moment = require("moment");
  const block = props.block;
  const alerts = props.alerts;
  const now_str = moment(new Date()).format("YYYY-MM-DD") + "T00:00:00.000Z";
  let num_shown = 0;
  return (
    <div id={block.id} className={`${css.root} ${block.class}`}>
      <Container>
        <h2 className={css.headline}>Announcements</h2>
        <Grid container spacing={3}>
          {alerts.map((item, idx) => {
            if (block.num_show > 0 && num_shown > block.num_show - 1)
              return null;
            if (
              !item.always_on &&
              (now_str > item.date_end || now_str < item.date_start)
            )
              return null;
            num_shown++;
            return (
              <Grid item xs={12} key={idx}>
                <div className={css.item}>
                  <h3 className={css.itemHeadline}>{item.title}</h3>

                  <div
                    className={css.itemContent}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
export default Announcements;
