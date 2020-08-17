import AbstractView from "./abstract.js";

const createDayElement = () => {
  return (`<li class="trip-days__item  day"></li>`);
};

export default class Day extends AbstractView {
  getTemplate() {
    return createDayElement();
  }
}
