import {
  insertDash
} from "../utils.js";

const makeCitySet = (array) => {
  let set = new Set();
  let infoTitle = ``;
  array.forEach((element) => {
    set.add(element.city);
  });
  for (let value of set) {
    infoTitle += `${value} `;
  }
  // insertDash(infoTitle); вызывала так и не работало - тире не ставилось, завела доп переменную. return infoTitle - был  Почему не раб?
  let line = insertDash(infoTitle);
  return line;
};

export const createWayPriceTemplate = (events) => {

  const cityTemplate = makeCitySet(events);
  return (
    ` <div class="trip-main">
      <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title"> ${cityTemplate}</h1>
  
          <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
        </div>
  
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>
      </section>`
  );
};
