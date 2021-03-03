const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3e5d8020dd2e3633a4556a2b8f89602f&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    const current = body.current;
    if (error) {
      callback("Cannot connect to internet", undefined);
    } else if (body.error) {
      callback("Invalid Location", undefined);
    } else {
      callback(
        undefined,
        `${current.weather_descriptions}. It is currently ${current.temperature} degress but. It feels like ${current.feelslike}`
      );
    }
  });
};

module.exports = forecast;
