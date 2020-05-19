class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${weather.main.temp} C`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec + ${weather.wind.deg} degrees`;
  }
}