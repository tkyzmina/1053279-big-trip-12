import {
  generateDescription
} from "./event.js";
import {
  generateEventType
} from "./event.js";
import {
  generateCity
} from "./event.js";
import {
  generateIcon
} from "./event.js";
import {
  generateOption
} from "./event.js";
import {
  generateParticle
} from "./event.js";
import {
  generateDescriptionPict
} from "./event.js";

import {
  cityList
} from "../constants.js";

const generateDate = () => {
  const currentDate = new Date();
  return (currentDate);
};


export const generateFormEvent = () => {
  const type = generateEventType();
  return {
    destTypeEvent: type,
    destCity: generateCity(),
    destIcon: generateIcon(type),
    destDescription: generateDescription(),
    destdDscriptionPict: generateDescriptionPict(),
    destDate: generateDate(),
    destOption: generateOption(type),
    destParticle: generateParticle(type),
    destCityList: cityList
  };
};
