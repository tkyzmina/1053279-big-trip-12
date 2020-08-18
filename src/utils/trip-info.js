// в модуле содержатся утилитарные ф-ии используемые для генерации общих данных о поездке в header
import {
  insertDash
} from "../utils/common.js";

export const makeCitySet = (array) => {
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

export const makeTotalPrice = (array) => {
  let price = 0;
  array.forEach((element) => {
    price = price + element.price;
  });
  return price;
};

export const makeTripDates = (array) => {
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
