import React from "react";
import { getEvents } from "../../gcal";
import moment from "moment";
import { Container, Grid, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import css from "../../css/modules/pageBuilderBlocks/Calendar.module.scss";
function compareStartDates(a, b) {
  if (a.start < b.start) {
    return -1;
  }
  return 1;
}

class CalendarMini extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    getEvents(events => {
      // sort events by start date
      events.sort(compareStartDates);
      this.setState({ events });
    });
  }

  render() {
    const block = this.props.block;
    const num_show = parseInt(this.props.block.num_show);
    let num_shown = 0;
    var today = new Date();
    var lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    const dateCutoffStamp = lastWeek.getTime();
    return (
        <div id={block.id} className={`${css.rootMini} ${block.class}`}>
        <Container>
          <h1 className={css.headline}>Coming Up...</h1>
          <Grid container spacing={3}>
            {this.state.events.map((evt, idx) => {
              const dateStart = moment(evt.start);
              if (dateCutoffStamp > dateStart.format("x") * 1) {
                return null;
              }
              if (num_show > 0 && num_shown >= num_show) {
                return null;
              }
              const dateStartDisp = dateStart.format("MMMM Do YYYY, h:mm a");
              const colSize = (num_show===6) ? 2 : (num_show===4) ? 3 : (num_show===3) ? 4 : (num_show===2) ? 2 : 12
              num_shown++;
              return (
                <Grid item xs={12} sm={colSize} key={idx} align="center">
                  <h3 className={css.itemTitle}>{evt.title}</h3>
                  <p className={css.itemDesc}>{dateStartDisp}</p>
                </Grid>
              );
            })}
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} align="center">
              <Button component={Link} to="/calendar" variant="outlined" color="secondary">Full Calendar</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default CalendarMini;
