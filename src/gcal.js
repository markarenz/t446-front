import request from "superagent";

const CALENDAR_ID = process.env.REACT_APP_GCAL_CALENDAR_ID;
const API_KEY = process.env.REACT_APP_GCAL_API_KEY;

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
