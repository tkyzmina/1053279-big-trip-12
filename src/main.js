import {
  createWayPriceTemplate
} from "./view/way-price.js";

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
  createEventDestElement
} from "./view/event-dest.js";

import {
  createNewEventElement
} from "./view/new-event.js";

import {
  generateEvent
} from "./mock/event.js";

import {
  generateFormEvent
} from "./mock/event-form.js";

const EVENTS_COUNT = 15;

const events = new Array(EVENTS_COUNT).fill().map(generateEvent);

const headerElement = document.querySelector(`.page-header`);
const tripElement = headerElement.querySelector(`.trip-main`);

export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(tripElement, createWayPriceTemplate(), `afterbegin`);

const navElement = headerElement.querySelector(`.trip-controls`);
render(navElement, createNavElement(), `afterbegin`);
render(navElement, createFilterTemplate(), `beforeend`);

const pageMainElement = document.querySelector(`.page-main`);
const eventsElement = pageMainElement.querySelector(`.trip-events`);

render(eventsElement, createSortTemplate(), `beforeend`);
render(eventsElement, createDaysListElement(), `beforeend`);

const daysListElement = pageMainElement.querySelector(`.trip-days`);
render(daysListElement, createDayElement(), `afterbegin`);

const eventsList = daysListElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENTS_COUNT; i++) {
  render(eventsList, createEventElement(events[i]), `beforeend`);
}
const eventForm = generateFormEvent();
render(eventsList, createNewEventElement(eventForm), `afterbegin`);

// let newEventElement = eventsList.querySelector(`.event--edit`);
// render(newEventElement, createEventDestElement(), `beforeend`);
