
# Weather App in JavaScript

In this app, you can get the weather details of a particular city by entering the city name. You can also get your current location weather details by clicking on the "Get Device Location" button. You'll get many weather details including temperature in celsius, weather conditions, location, feels like, and humidity.

## Usage

Paste your API key to the appid parameter of the given URLs. These URLs are in line.no 27 & 33 of script.js file. You can get an API key from [here](https://openweathermap.org/api) for free

```javascript
api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=your_api_key`;
```
```javascript
api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=your_api_key`;
```
