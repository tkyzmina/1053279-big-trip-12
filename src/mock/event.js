import {
  shuffleArray
} from "../utils.js";
import {
  getRandomInteger
} from "../utils.js";
const MAX_DESCRIPTIONS = 5;

const generateDescription = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  let separator = `. `;
  let arrText = text.split(separator);
  let arrDescriptions = [];
  for (let string of arrText) {
    for (let symbol of string) {
      if (string[string.length - 1] !== `.`) {
        string = string + `.`;
        arrDescriptions.push(string);
      }
    }
  }
  shuffleArray(arrDescriptions);

  const randomIndex = getRandomInteger(0, MAX_DESCRIPTIONS);
  let description = arrDescriptions.slice(0, randomIndex);
  return (description);
};

const generateEventType = () => {
  const typeList = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];
  const randomNumber = getRandomInteger(0, typeList.length - 1);
  return typeList[randomNumber];
};

const generateCity = () => {
  const cityList = [`Stockholm`, `Orebro`, `Oslo`, `Rodal`, `Geiranger`, `Bergen`, `Flam`, `Gudvagen`, `Otta`, `Trondheim`];
  const randomNumber = getRandomInteger(0, cityList.length - 1);
  return cityList[randomNumber];
};
const generateIcon = (type) => {
  let url;
  let newStr;
  if (type === `Check`) {
    newStr = type[0].toLowerCase() + type.slice(1);
    url = `icons/${newStr}-in.png`;
  } else {
    newStr = type[0].toLowerCase() + type.slice(1);
    url = `icons/${newStr}.png`;
  }
  return (url);
};
const generateOption = (type) => {
  let ar1 = [`Дополнительный багаж`, `Напиток`, `Повысить класс`, `Страховка`, `Срочность`];
  let ar2 = [`Повысить класс`, `Страховка`, `Завтрак`, `Обед`, `Ужин`];
  let ar3 = [`Аудиогид`, `Паром`, `Завтрак`, `Экскурсия`, `Персональный гид`];
  let chosedOptionsArray;

  switch (type) {
    case `Taxi`:
      chosedOptionsArray = ar1;
      break;
    case `Bus`:
      chosedOptionsArray = ar1;
      break;
    case `Train`:
      chosedOptionsArray = ar1;
      break;
    case `Ship`:
      chosedOptionsArray = ar1;
      break;
    case `Transport`:
      chosedOptionsArray = ar1;
      break;
    case `Drive`:
      chosedOptionsArray = ar1;
      break;
    case `Flight`:
      chosedOptionsArray = ar2;
      break;
    case `Check`:
      chosedOptionsArray = ar2;
      break;
    case `Sightseeing`:
      chosedOptionsArray = ar3;
      break;
    case `Restaurant`:
      chosedOptionsArray = ar2;
      break;
  }
  let maxOptions = 5;
  let randomNumber = getRandomInteger(0, maxOptions);

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

const generateDescriptionPict = () => {
  const picturesArray = [];
  let randomNumber = getRandomInteger(0, MAX_DESCRIPTIONS);
  for (let i = 0; i <= randomNumber; i++) {
    picturesArray.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return (picturesArray);
};

const generateDate = () => {
  const dayGap = 5;
  const timeGap = 24;
  const randomDuration = getRandomInteger(0, dayGap);
  const randomHour = getRandomInteger(0, timeGap);
  const randomMinSek = getRandomInteger(0, 60);

  const currentDate = new Date();
  currentDate.setHours(randomHour, randomMinSek, randomMinSek, 999);

  const startDay = new Date();
  startDay.setHours(randomHour, randomMinSek, randomMinSek, 999);

  let finishDay = new Date();
  finishDay.setHours(getRandomInteger(0, timeGap), getRandomInteger(0, 60), getRandomInteger(0, 60), 999);

  startDay.setDate(currentDate.getDate() + randomDuration);
  finishDay.setDate((currentDate.getDate() + dayGap) - (currentDate.getDate() + randomDuration));
  let duration = {
    start: startDay,
    finish: finishDay
  };
  return (duration);
};

export const generateEvent = () => {
  const type = generateEventType();
  return {
    typeEvent: type,
    city: generateCity(),
    icon: generateIcon(type),
    description: generateDescription(),
    descriptionPict: generateDescriptionPict(),
    duration: generateDate(),
    option: generateOption(type),
  };
};
