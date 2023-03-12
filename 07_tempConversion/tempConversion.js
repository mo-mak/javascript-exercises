const convertToCelsius = function(fahrTemp) {
  let celsTemp = (fahrTemp - 32) * (5/9);
  celsTemp = Math.round(celsTemp * 10) / 10;
  return celsTemp; 
};

const convertToFahrenheit = function(celsTemp) {
  let fahrTemp = (celsTemp * (9/5)) + 32;
  fahrTemp = Math.round(fahrTemp * 10) / 10;
  return fahrTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
