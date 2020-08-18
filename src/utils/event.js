export const createOption = (destOption) => {
  const optionTemplate = Object.entries(destOption).map(([option, price]) =>
    `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${option.toLowerCase()}-1" type="checkbox"
              name="event-offer-${option.toLowerCase()}">
            <label class="event__offer-label" for="event-offer-${option.toLowerCase()}-1">
              <span class="event__offer-title">${option}</span>
              &plus;
              &euro;&nbsp;<span class="event__offer-price">${price}</span>
            </label>
          </div>`
  ).join(``);
  return optionTemplate;
};

export const createCityList = (cityList) => {
  let destinationList = cityList.map((city) => {
    return `<option value = "${city}"> </option>`;
  }).join(``);
  return destinationList;
};

export const formateEventDate = (date) => {
  let formattedDate = date !== null ?
    date.toLocaleString(`en-US`, {
      hour12: false,
      year: `numeric`,
      month: `long`,
      day: `numeric`,
      hour: `2-digit`,
      minute: `2-digit`,
      second: `2-digit`,
    }) : ``;
  return formattedDate;
};

export const formateNewEventDate = (date) => {
  let formattedDate = date !== null ?
    date.toLocaleString(`en-GB`, {
      hour12: false,
      useGrouping: false,
      year: `2-digit`,
      month: `2-digit`,
      day: `2-digit`,
      hour: `2-digit`,
      minute: `2-digit`
    }).replace(/,/g, ``) : ``;
  return formattedDate;
};
