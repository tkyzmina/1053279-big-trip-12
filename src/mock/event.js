import {
  getRandomInteger,
  shuffleArray
} from "../utils/common.js";


import {
  MAX_DESCRIPTIONS
} from "../constants.js";
import {
  cityList
} from "../constants.js";
import {
  options
} from "../constants.js";

export const generateDescription = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  let description = ``;
  let arrText = text.split(/\.\s*/g).filter((s) => s);
  shuffleArray(arrText);
  const randomIndex = getRandomInteger(0, MAX_DESCRIPTIONS);
  if (randomIndex > 0) {
    description = `${arrText.slice(0, randomIndex).join(`. `)}.`;
  }
  return description;
};

export const generateEventType = () => {
  const typeList = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];
  const randomNumber = getRandomInteger(0, typeList.length - 1);
  return typeList[randomNumber];
};

export const generateCity = () => {
  const randomNumber = getRandomInteger(0, cityList.length - 1);
  return cityList[randomNumber];
};

export const generateIcon = (type) => {
  let url;
  let newStr;
  if (type === `Check`) {
    newStr = type[0].toLowerCase() + type.slice(1);
    url = `img/icons/${newStr}-in.png`;
  } else {
    newStr = type[0].toLowerCase() + type.slice(1);
    url = `img/icons/${newStr}.png`;
  }
  return (url);
};

export const generateOption = (type) => {
  let chosedOptionsArray;

  switch (type) {
    case `Taxi`:
    case `Bus`:
    case `Train`:
    case `Ship`:
    case `Transport`:
    case `Drive`:
      chosedOptionsArray = options.ar1.slice();
      break;
    case `Flight`:
    case `Check`:
    case `Restaurant`:
      chosedOptionsArray = options.ar2.slice();
      break;
    case `Sightseeing`:
      chosedOptionsArray = options.ar3.slice();
      break;
  }
  const maxOptions = 5;
  const randomNumber = getRandomInteger(0, maxOptions);

  let priceArray = [];
  let newPrice = ``;
  let objOption = {};

  const maxOptionPrice = 20;
  let optionsArray = chosedOptionsArray;
  optionsArray.length = randomNumber;

  for (let i = 0; i < randomNumber; i++) {
    newPrice = (getRandomInteger(1, maxOptionPrice) * 10);
    priceArray.push(newPrice);
    objOption[optionsArray[i]] = priceArray[i];
  }
  return (objOption);
};

export const generateDescriptionPict = () => {
  const randomNumber = getRandomInteger(1, MAX_DESCRIPTIONS);
  let picturesArray = [];
  let pictArray = [];
  for (let i = 1; i <= randomNumber; i++) {
    pictArray.push(`<img class="event__photo" src="http://picsum.photos/248/152?r=${Math.random()}"alt="Event photo">`);
    picturesArray = pictArray.join(`\n`);
  }
  return (picturesArray);
};

const generateDate = () => {
  const dayGap = 2;
  const timeGap = 23;
  const hourGap = 23;
  const minGap = 60;
  const randomStart = getRandomInteger(0, dayGap);
  const randomDuration = getRandomInteger((randomStart), (randomStart + dayGap));
  const randomHour = getRandomInteger(0, timeGap);
  const randomMinSek = getRandomInteger(1, 60);

  const currentDate = new Date();

  const startDay = new Date();
  startDay.setHours(randomHour, randomMinSek, randomMinSek, 999);
  startDay.setDate(currentDate.getDate() + randomStart);

  const finishDay = new Date();
  finishDay.setHours(getRandomInteger(startDay.getHours(), hourGap), getRandomInteger(startDay.getMinutes(), minGap), randomMinSek, 999);
  finishDay.setDate(startDay.getDate() + randomDuration);

  const period = (finishDay - startDay);

  let days = parseInt(period / (1000 * 60 * 60 * 24), 10);
  let hours = parseInt((period / (1000 * 60 * 60)) % 24, 10);
  let min = parseInt((period / (1000 * 60)) % 60, 10);

  let itemDuration = ``;
  const timeMap = new Map();
  timeMap.set(`D`, days);
  timeMap.set(`H`, hours);
  timeMap.set(`M`, min);

  for (let key of timeMap) {
    if (key[1] !== 0) {
      itemDuration += `${key[1]}${key[0]} `;
    }
  }

  const duration = {
    date: currentDate,
    start: startDay,
    finish: finishDay,
    durationTime: itemDuration
  };
  return (duration);
};

const generatePrice = () => {
  const randomPrice = (getRandomInteger(1, 50) * 10);
  return randomPrice;
};

export const generateParticle = (type) => {
  let particle;
  if (type === `Check` || type === `Sightseeing` || type === `Restaurant`) {
    particle = `in`;
  } else {
    particle = `to`;
  }
  return particle;
};

export const generateEvent = () => {
  const type = generateEventType();
  return {
    typeEvent: type,
    city: generateCity(),
    destCityList: cityList,
    icon: generateIcon(type),
    description: generateDescription(),
    descriptionPict: generateDescriptionPict(),
    duration: generateDate(),
    option: generateOption(type),
    price: generatePrice(),
    particle: generateParticle(type)
  };
};
