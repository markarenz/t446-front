import React from "react";
import { getEvents } from "../../gcal";
import moment from "moment";
import { Container, Grid, Button } from "@material-ui/core";
import css from "../../css/modules/pageBuilderBlocks/Calendar.module.scss";
function compareStartDates(a, b) {
  if (a.start < b.start) {
    return -1;
  }
  return 1;
}

class Calendar extends React.Component {
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
    const num_show = this.props.block.num_show;
    let num_shown = 0;
    // let cursorMonth = "";
    // let cursorYear = "";
    // let labelMonth = "";
    // let labelYear = "";

    var today = new Date();
    var lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    const dateCutoffStamp = lastWeek.getTime();

    // const dispCalendarItems = (num_show>0) ? :

    return (
        <div id={block.id} className={`${css.root} ${block.class}`}>
        <Container>
          {num_show > 0 && <h1 className={css.headline}>Upcoming Events</h1>}
          <Grid container spacing={3}>
            {this.state.events.map((evt, idx) => {
              const dateStart = moment(evt.start);
              // Cut off events if they occurred more than a week ago
              if (dateCutoffStamp > dateStart.format("x") * 1) {
                return null;
              }
              if (num_show > 0 && num_shown >= num_show) {
                return null;
              }
              // const thisMonth = dateStart.format("MMMM");
              // const thisYear = dateStart.format("YYYY");
              const dateStartDisp = dateStart.format("MMMM Do YYYY, h:mm a");
              // labelMonth = "";
              // if (cursorMonth !== thisMonth) {
              //   cursorMonth = thisMonth;
              //   labelMonth = <h2>{thisMonth}</h2>;
              // }
              // labelYear = "";
              // if (cursorYear !== thisYear) {
              //   cursorYear = thisYear;
              //   labelYear = <h2>{thisYear}</h2>;
              // }
              //   {labelYear}
              //   {labelMonth}
              num_shown++;
              return (
                <Grid item xs={12} sm={4} key={idx} align="center">
                  <h3 className={css.itemTitle}>{evt.title}</h3>
                  <p className={css.itemDesc}>{dateStartDisp}</p>
                  <Button variant="outlined" className="btn-white growLink">
                    View
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}
export default Calendar;
