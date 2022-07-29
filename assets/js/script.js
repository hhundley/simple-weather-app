// API key
var  apiKey = '128131299a05367570bdc9c94f118fc8';

// Setting Dates
var DateTime = luxon.DateTime;
var dateTime = DateTime.now();
var formattedCurrentDate = dateTime.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
$("#currentDay").text(formattedCurrentDate);

//Function for obtaining city name when search button is clicked
$("#searchButton").on("click", function() {
    var cityInput = document.getElementById('getCity').value;
    console.log(cityInput);

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=${apiKey}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var cityName = data[0].name;
                var cityLat = data[0].lat;
                var cityLon = data[0].lon;

                function weatherDataPull () {
                        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`)
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                var cityTemp = data.current.temp;
                                var cityWind = data.current.wind_speed;
                                var cityHumidity = data.current.humidity;
                                var cityUV = data.current.uvi;
                                console.log(data);
                                $(".currentCity").text(cityName);
                                $("#currentTemp").text("Temp: "+cityTemp+" °F");
                                $("#currentWind").text("Wind: "+cityWind+" mph");
                                $("#currentHumidity").text("Humidity: "+cityHumidity+" %");
                                $("#currentUV").text("UV Index: "+cityUV);
                                });
                    
                };
            weatherDataPull();
                });
    });