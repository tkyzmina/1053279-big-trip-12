import TripInfoView from "./view/trip-info.js";
import SortView from "./view/sort.js";
import NavView from "./view/nav.js";
import FilterView from "./view/filter.js";
import DaysListView from "./view/day-list.js";
import DayView from "./view/day.js";
import DayInfoView from "./view/day-info.js";
import EventsListView from "./view/events-list.js";
import EventView from "./view/event.js";
import NewEventView from "./view/new-event.js";


import {
  generateEvent
} from "./mock/event.js";

import {
  render,
  RenderPosition,
  replace
} from "./utils/render.js";

const EVENTS_COUNT = 15;

const events = new Array(EVENTS_COUNT).fill().map(generateEvent);

const headerElement = document.querySelector(`.page-header`);
const headerMainInfo = headerElement.querySelector(`.trip-main`);
const navElement = headerElement.querySelector(`.trip-controls`);

const pageMainElement = document.querySelector(`.page-main`);
const eventsElement = pageMainElement.querySelector(`.trip-events`);

render(headerMainInfo, new TripInfoView(events), RenderPosition.AFTERBEGIN);
render(navElement, new NavView(), RenderPosition.AFTERBEGIN);
render(navElement, new FilterView(), RenderPosition.BEFOREEND);
render(eventsElement, new SortView(), RenderPosition.AFTERBEGIN);

const daysListComponent = new DaysListView();
render(eventsElement, daysListComponent, RenderPosition.BEFOREEND);

const dayComponent = new DayView();
render(daysListComponent, dayComponent, RenderPosition.BEFOREEND);
render(dayComponent, new DayInfoView(), RenderPosition.AFTERBEGIN);

const eventsListComponent = new EventsListView();
render(dayComponent, eventsListComponent, RenderPosition.BEFOREEND);

const renderEvent = (eventList, event) => {
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

  render(eventList, eventComponent, RenderPosition.BEFOREEND);
};

for (let i = 0; i < EVENTS_COUNT; i++) {
  renderEvent(eventsListComponent, events[i]);
}
