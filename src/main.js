import TripInfoView from "./view/trip-info.js";
import SortView from "./view/sort.js";
import NavView from "./view/nav.js";
import FilterView from "./view/filter.js";
import DaysListView from "./view/day-list.js";
import EventsBoardPresenter from "./presenter/trip.js";

import {
  generateEvent
} from "./mock/event.js";

import {
  render,
  RenderPosition,
} from "./utils/render.js";

const EVENTS_COUNT = 15;

const events = new Array(EVENTS_COUNT).fill().map(generateEvent);

const headerElement = document.querySelector(`.page-header`);
const headerMainInfo = headerElement.querySelector(`.trip-main`);
const navElement = headerElement.querySelector(`.trip-controls`);

const pageMainElement = document.querySelector(`.page-main`);
const eventsBoardElement = pageMainElement.querySelector(`.trip-events`);

render(headerMainInfo, new TripInfoView(events), RenderPosition.AFTERBEGIN);
render(navElement, new NavView(), RenderPosition.AFTERBEGIN);
render(navElement, new FilterView(), RenderPosition.BEFOREEND);
render(eventsBoardElement, new SortView(), RenderPosition.BEFOREEND);

const daysListComponent = new DaysListView();
render(eventsBoardElement, daysListComponent, RenderPosition.BEFOREEND);

const tripPresenter = new EventsBoardPresenter(daysListComponent);
tripPresenter.init(events);
