import AbstractView from "./abstract.js";

import {
  makeCitySet,
  makeTotalPrice,
  makeTripDates
} from "../utils/trip-info.js";

const createTripInfoTemplate = (events) => {
  // console.log(events);

  const cityTemplate = makeCitySet(events);
  const price = makeTotalPrice(events);
  const date = makeTripDates(events);
  return (`<section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title"> ${cityTemplate}</h1>
  
          <p class="trip-info__dates">${date}</p>
        </div>
  
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
        </p>
      </section>`);
};

export default class TripInfo extends AbstractView {
  constructor(events) {
    super();
    this._events = events;
  }

  getTemplate() {
    return createTripInfoTemplate(this._events);
  }
}
