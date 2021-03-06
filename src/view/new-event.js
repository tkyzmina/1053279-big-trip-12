import AbstractView from "./abstract.js";
import {
  createOption,
  createCityList,
  formateNewEventDate
} from "../utils/event.js";

const BLANK_EVENT = {
  typeEvent: `Flight`,
  city: `Chamonix`,
  icon: `img/icons/flight.png`,
  particle: `to`,
  price: 160,
  description: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
};

const createNewEventElement = (event) => {
  const {
    typeEvent,
    city,
    icon,
    particle,
    duration,
    option,
    price,
    destCityList,
    description,
    descriptionPict
  } = event;

  const destinationTemplate = createCityList(destCityList);
  const optionTemplate = createOption(option);
  const dateStart = formateNewEventDate(duration.start);
  const dateEnd = formateNewEventDate(duration.finish);

  return (`<form class="trip-events__item  event  event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="${icon}" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Transfer</legend>

          <div class="event__type-item">
            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="taxi">
            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="bus">
            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="train">
            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="ship">
            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="transport">
            <label class="event__type-label  event__type-label--transport"
              for="event-type-transport-1">Transport</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="drive">
            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="flight" checked>
            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
          </div>
        </fieldset>

        <fieldset class="event__type-group">
          <legend class="visually-hidden">Activity</legend>

          <div class="event__type-item">
            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="check-in">
            <label class="event__type-label  event__type-label--check-in"
              for="event-type-check-in-1">Check-in</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="sightseeing">
            <label class="event__type-label  event__type-label--sightseeing"
              for="event-type-sightseeing-1">Sightseeing</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio"
              name="event-type" value="restaurant">
            <label class="event__type-label  event__type-label--restaurant"
              for="event-type-restaurant-1">Restaurant</label>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${typeEvent} ${particle}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text"
        name="event-destination" value="${city}" list="destination-list-1">
      <datalist id="destination-list-1">
        ${destinationTemplate}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">
        From
      </label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text"
        name="event-start-time" value="${dateStart}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">
        To
      </label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
        value="${dateEnd}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro; ${price}
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price"
        value="">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
      ${optionTemplate}
      </div>
    </section>

    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
         ${descriptionPict}
        </div>
      </div>
    </section>
  </section>
</form>
    `);
};

export default class NewEvent extends AbstractView {
  constructor(event) {
    super();
    this._event = event || BLANK_EVENT;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  getTemplate() {
    return createNewEventElement(this._event);
  }
  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit();
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().addEventListener(`submit`, this._formSubmitHandler);
  }
}
