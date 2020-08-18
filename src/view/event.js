import AbstractView from "./abstract.js";
import {
  formateEventDate
} from "../utils/event.js";
const createEventOption = (option) => {
  const optionEventTemplate = Object.entries(option).map(([name, price]) =>
    `<li class = "event__offer">
  <span class = "event__offer-title"> ${name} </span>
   &plus; &euro; &nbsp;
    <span class = "event__offer-price"> ${price} </span> 
  </li>`).join(``);
  return optionEventTemplate;
};

const createEventElement = (event) => {
  const {
    typeEvent,
    city,
    icon,
    price,
    particle,
    duration,
    option
  } = event;

  const dateStart = formateEventDate(duration.start);
  const dateEnd = formateEventDate(duration.finish);
  const eventOptionTemplate = createEventOption(option);

  return (`<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${icon}" alt="Event type icon">
      </div>
      <h3 class="event__title">${typeEvent} ${particle} ${city}</h3>
  
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateStart}">${duration.start.getHours()}:${duration.start.getMinutes()}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateEnd}">${duration.finish.getHours()}:${duration.finish.getMinutes()}</time>
        </p>
        <p class="event__duration">${duration.durationTime}</p>
      </div>
  
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
  
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${eventOptionTemplate}
      </ul>
  
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
      `);
};

export default class Event extends AbstractView {
  constructor(event) {
    super();
    this._event = event;
    this._editClickHandler = this._editClickHandler.bind(this);
  }

  getTemplate() {
    return createEventElement(this._event);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._editClickHandler);
  }
}
