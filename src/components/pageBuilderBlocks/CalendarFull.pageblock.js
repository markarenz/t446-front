import React from "react";
import { getEvents } from "../../gcal";
import {
  Container,
  Grid,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import {
  NavigateNext as IconNext,
  NavigateBefore as IconPrev
} from "@material-ui/icons";
import monthLabels from "../../data/monthLabels";
import dayLabels from "../../data/dayLabels";
import css from "../../css/modules/pageBuilderBlocks/Calendar.module.scss";

const moment = require("moment");

function compareStartDates(a, b) {
  if (a.start < b.start) {
    return -1;
  }
  return 1;
}

class CalendarFull extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear()
    };
    this.handleCalNavPrev = this.handleCalNavPrev.bind(this);
    this.handleCalNavNext = this.handleCalNavNext.bind(this);
  }
  handleCalNavPrev() {
    let m = this.state.currentMonth - 1;
    let y = this.state.currentYear;
    if (m < 1) {
      m = 12;
      y--;
    }
    this.setState({
      currentMonth: m,
      currentYear: y
    });
  }
  handleCalNavNext() {
    let m = this.state.currentMonth + 1;
    let y = this.state.currentYear;
    if (m > 12) {
      m = 1;
      y++;
    }
    this.setState({
      currentMonth: m,
      currentYear: y
    });
  }

  componentDidMount() {
    getEvents(events => {
      // sort events by start date
      events.sort(compareStartDates);
      this.setState({ events });
    });
  }

  render() {
    const zpad = n => {
      if (n < 10) {
        return "0" + n;
      }
      return n;
    };
    const weeks = [0, 1, 2, 3, 4, 5];
    const block = this.props.block;
    const numDaysInMonth = moment(
      this.state.currentYear + "-" + zpad(this.state.currentMonth) + "-01"
    ).daysInMonth();
    const monthStartDay = moment(
      this.state.currentYear + "-" + zpad(this.state.currentMonth) + "-01"
    )
      .startOf("month")
      .day();
    // Sun 0
    const filteredEvents = this.state.events.filter(event => {
      const eventMonthStamp = moment(event.start).format("YYYY-MM");
      const currentMonthStamp =
        this.state.currentYear + "-" + zpad(this.state.currentMonth);
      if (eventMonthStamp === currentMonthStamp) {
        return true;
      }
      return false;
    });
    let calCursor = 0;
    return (
      <div id={block.id} className={`${css.rootFull} ${block.class}`}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} align="center">
              <h2 className={css.calNav}>
                <IconButton
                  className={css.calNavBtn}
                  onClick={this.handleCalNavPrev}
                >
                  <IconPrev />
                </IconButton>
                <span className={css.calMonthLabel}>
                  {monthLabels[this.state.currentMonth]} {this.state.currentYear}
                </span>
                <IconButton
                  className={css.calNavBtn}
                  onClick={this.handleCalNavNext}
                >
                  <IconNext />
                </IconButton>
              </h2>
            </Grid>
          </Grid>
          <div className="desktop-only">
            <Table className={css.calTable}>
              <TableHead>
                <TableRow>
                  {dayLabels.map((day, idx) => (
                    <TableCell key={idx} className={css.callHeaderCell}>
                      <div>{day}</div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {weeks.map((wk, widx) => {
                  // don't render an empty week
                  const thisDay = calCursor - monthStartDay;
                  if (thisDay > numDaysInMonth){
                    return null;
                  }
                  return (
                    <TableRow key={widx}>
                      {dayLabels.map((day, idx) => {
                        calCursor++;
                        const thisDay = calCursor - monthStartDay;
                        if (thisDay < 1 || thisDay > numDaysInMonth) {
                          return (
                            <TableCell
                              className={css.calCellEmpty}
                              key={idx}
                            ></TableCell>
                          );
                        }
                        return (
                          <TableCell className={css.calCell} key={idx}>
                            <div>{thisDay}</div>
                            {filteredEvents
                                .filter(evt => {
                                  const eventDayStamp = moment(evt.start).format(
                                      "YYYY-MM-DD"
                                  );
                                  const currentDayStamp =
                                      this.state.currentYear +
                                      "-" +
                                      zpad(this.state.currentMonth) +
                                      "-" +
                                      zpad(thisDay);
                                  if (eventDayStamp === currentDayStamp) {
                                    return true;
                                  }
                                  return false;
                                })
                                .map((evt, ix) => (
                                    <div key={idx}>
                                      @{moment(evt.start).format("h:mm A")}<br />
                                      {evt.title}<br />
                                    </div>
                                ))}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="mobile-only">
            <Grid container spacing={3}>
              {filteredEvents.map((evt, idx) => {
                return (
                  <Grid key={idx} item xs={12} align="center">
                    <h3 className={css.itemTitle}>
                      {moment(evt.start).format("LLLL")}
                      <br />
                      {evt.title}
                    </h3>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}
export default CalendarFull;
