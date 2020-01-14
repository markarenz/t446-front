import request from "superagent";

// TODO: ENV THESE VARS
const CALENDAR_ID =
    "ir545eorvltod83ehlddhvb2075tq7bq@import.calendar.google.com";
const API_KEY = "AIzaSyBF2KkK36DN-voGKdzYNZ3ExJL7Qx-hrxk";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
    request.get(url).end((err, resp) => {
        if (!err) {
            const events = [];
            JSON.parse(resp.text).items.map(event => {
                events.push({
                    start: event.start.date || event.start.dateTime,
                    end: event.end.date || event.end.dateTime,
                    title: event.summary
                });
                return null;
            });
            callback(events);
        }
    });
}
