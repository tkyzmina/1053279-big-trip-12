import {
  insertDash
} from "../utils.js";
import {createElement} from "../utils.js";

const makeCitySet = (array) => {
  let set = new Set();
  let infoTitle = ``;
  array.forEach((element) => {
    set.add(element.city);
  });
  for (let value of set) {
    infoTitle += `${value} `;
  }
  let line = insertDash(infoTitle);
  return line;
};

const makeTotalPrice = (array) => {
  let price = 0;
  array.forEach((element) => {
    price = price + element.price;
  });
  return price;
};

const makeTripDates = (array) => {
  let dateArray = [];
  const dateChangeView = (element) => {
    let date = element !== null ?
      element.toLocaleString(`en-US`, {
        hour12: false,
        useGrouping: false,
        day: `2-digit`,
        month: `long`,
      }) : ``;
    return date;
  };

  array.forEach((element) => {
    const dateFin = dateChangeView(element.duration.finish);
    const dateStart = dateChangeView(element.duration.start);
    dateArray.push(dateFin);
    dateArray.push(dateStart);
  });

  dateArray.sort();
  const dateDurationString = `${dateArray[0]} — ${dateArray[dateArray.length - 1]} `;
  return dateDurationString;
};

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
      </section>`
  );
};

export default class TripInfo {
  constructor(events) {
    this._element = null;
    this._events = events;
  }

  getTemplate() {
    return createTripInfoTemplate(this._events);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
