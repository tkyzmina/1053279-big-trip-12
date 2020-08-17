import AbstractView from "./abstract.js";

const createDaysListElement = () => {
  return (`<ul class="trip-days"></ul>`);
};
export default class DaysList extends AbstractView {
  getTemplate() {
    return createDaysListElement();
  }
}
