import AbstractView from "./abstract.js";

export default class DayInfo extends AbstractView {
  constructor(date, number) {
    super();
    this._date = date;
    this._number = number;
  }
  getTemplate() {
    return (`<div class="day__info">
    <span class="day__counter">1</span>
    <time class="day__date" datetime="2019-03-18">MAR 18</time>
  </div>`);
  }
}
