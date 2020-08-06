export const createEventElement = (event) => {
  const {
    typeEvent,
    city,
    icon,
    price,
    particle,
    duration
  } = event;


  return (` <li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${icon}" alt="Event type icon">
      </div>
      <h3 class="event__title">${typeEvent} ${particle} ${city}</h3>
  
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">${duration.start.getHours()}:${duration.start.getMinutes()}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${duration.finish.getHours()}:${duration.finish.getMinutes()}</time>
        </p>
        <p class="event__duration">${duration.durationTime}</p>
      </div>
  
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
  
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">20</span>
         </li>
      </ul>
  
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
    `);
};
