import DayView from "../view/day.js";
import DayInfoView from "../view/day-info.js";
import EventsListView from "../view/events-list.js";
import EventView from "../view/event.js";
import NewEventView from "../view/new-event.js";

import {
  render,
  RenderPosition,
  replace
} from "../utils/render.js";
const EVENTS_COUNT = 15;

export default class Trip {
  constructor(container) {
    this._container = container;
    this._dayComponent = new DayView();
    this._dayInfoComponent = new DayInfoView();
    this._eventsListComponent = new EventsListView();
    this._eventComponent = new EventView();
    this._newEventComponent = new NewEventView();
  }

  init(events) {
    this._events = events.slice();

    render(this._container, this._dayComponent, RenderPosition.BEFOREEND);
    render(this._dayComponent, this._dayInfoComponent, RenderPosition.AFTERBEGIN);
    render(this._dayComponent, this._eventsListComponent, RenderPosition.BEFOREEND);

    this._renderEvents(events);
  }

  _renderEvent(event) {
    const eventComponent = new EventView(event);
    const eventEditComponent = new NewEventView(event);

    const replaceEventToNewEvent = () => {
      replace(eventEditComponent, eventComponent);
    };
    const replaceNewEventToEvent = () => {
      replace(eventComponent, eventEditComponent);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        replaceNewEventToEvent();
        document.removeEventListener(`keydown`, onEscKeyDown);
        document.removeEventListener(`click`, onCancel);
      }
    };

    const onCancel = (evt) => {
      const cancelBtn = document.querySelector(`.event__reset-btn`);
      if (evt.target === cancelBtn) {
        replaceNewEventToEvent();
        document.removeEventListener(`keydown`, onEscKeyDown);
        document.removeEventListener(`click`, onCancel);
      }
    };

    eventComponent.setEditClickHandler(() => {
      replaceEventToNewEvent();
      document.addEventListener(`keydown`, onEscKeyDown);
      document.addEventListener(`click`, onCancel);
    });

    eventEditComponent.setFormSubmitHandler(() => {
      replaceNewEventToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
      document.removeEventListener(`click`, onCancel);
    });

    render(this._eventsListComponent, eventComponent, RenderPosition.BEFOREEND);
    return (eventComponent);
  }

  // разбивает массив на дни
  _groupByDay(array) {
    const tripDays = new Map();

    for (const event of array.slice()) {
      const date = new Date(event.duration.start).setHours(0, 0, 0, 0);
      if (tripDays.has(date)) {
        tripDays.get(date).push(event);
      } else {
        tripDays.set(date, [event]);
      }
    }
    // console.log(tripDays);
    return tripDays;
  }

  _renderEvents(events) {
    for (let i = 0; i < EVENTS_COUNT; i++) {
      this._renderEvent(events[i]);
    }
    this._groupByDay(events);
  }
}
