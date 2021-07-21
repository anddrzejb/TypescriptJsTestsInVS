import { separated } from './modules/separated';

export { separated }

function getData(value) {
  if (value > 1) {
    return true;
  }
}

module.exports = getData;
//module.exports = separated;

export function getAnotherData(value) {
  return separated.getDataFromSeparated(value);  
}