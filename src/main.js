// import {
//   createWayPriceTemplate
// } from "./view/trip-info.js";
import TripInfoView from "./view/trip-info.js";

import {
  createNavElement
} from "./view/nav.js";

import {
  createFilterTemplate
} from "./view/filter.js";

import {
  createSortTemplate
} from "./view/sort.js";

import {
  createDaysListElement
} from "./view/day-list.js";

import {
  createDayElement
} from "./view/day.js";

import {
  createEventElement
} from "./view/event.js";

import {
  createNewEventElement
} from "./view/new-event.js";

import {
  generateEvent
} from "./mock/event.js";

import {
  render,
  RenderPosition
} from "./utils.js";

import {
  renderTemplate
} from "./utils.js";

const EVENTS_COUNT = 15;

const events = new Array(EVENTS_COUNT).fill().map(generateEvent);

const headerElement = document.querySelector(`.page-header`);

const headerMainInfo = headerElement.querySelector(`.trip-main`);
const navElement = headerElement.querySelector(`.trip-controls`);

renderTemplate(navElement, createNavElement(), `afterbegin`);
renderTemplate(navElement, createFilterTemplate(), `beforeend`);

const pageMainElement = document.querySelector(`.page-main`);
const eventsElement = pageMainElement.querySelector(`.trip-events`);

renderTemplate(eventsElement, createSortTemplate(), `beforeend`);
renderTemplate(eventsElement, createDaysListElement(), `beforeend`);

const daysListElement = pageMainElement.querySelector(`.trip-days`);
renderTemplate(daysListElement, createDayElement(), `afterbegin`);

const eventsList = daysListElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENTS_COUNT; i++) {
  renderTemplate(eventsList, createEventElement(events[i]), `beforeend`);
}
const eventForm = generateEvent();
renderTemplate(eventsList, createNewEventElement(eventForm), `afterbegin`);
render(headerMainInfo, new TripInfoView(events).getElement(), RenderPosition.AFTERBEGIN);
