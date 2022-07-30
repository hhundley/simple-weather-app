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
                if(data.length ===0) { 
                    $(".currentCity").text("Please enter a valid city");
                    $("#currentTemp").text("");
                    $("#currentIcon").attr('src','');
                    $("#currentWind").text("");
                    $("#currentHumidity").text("");
                    $("#currentUV").text("");
                    document.getElementById('getCity').value = "";
                    document.getElementById('day1').style.display = "none";
                    document.getElementById('day2').style.display = "none";
                    document.getElementById('day3').style.display = "none";
                    document.getElementById('day4').style.display = "none";
                    document.getElementById('day5').style.display = "none";
                    return 
                } else {
                var cityName = data[0].name;
                var cityLat = data[0].lat;
                var cityLon = data[0].lon;
                document.getElementById('getCity').value = "";
                document.getElementById('day1').style.display = "block";
                document.getElementById('day2').style.display = "block";
                document.getElementById('day3').style.display = "block";
                document.getElementById('day4').style.display = "block";
                document.getElementById('day5').style.display = "block";

                function weatherDataPull () {
                        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`)
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                // display current data
                                var cityTemp = data.current.temp;
                                var iconID = data.current.weather[0].icon;
                                var cityWind = data.current.wind_speed;
                                var cityHumidity = data.current.humidity;
                                var cityUV = data.current.uvi;
                                console.log(data);
                                $(".currentCity").text(cityName);
                                $("#currentIcon").attr('src',`http://openweathermap.org/img/wn/${iconID}@2x.png`);
                                $("#currentTemp").text("Temp: "+cityTemp+" °F");
                                $("#currentWind").text("Wind: "+cityWind+" mph");
                                $("#currentHumidity").text("Humidity: "+cityHumidity+" %");
                                $("#currentUV").text("UV Index: "+cityUV);
                                document.getElementById('getCity').value = "";

                                // display future data
                                    // day1
                                    var futureTemp1 = data.daily[0].temp.day;
                                    var futureIconID1 = data.daily[0].weather[0].icon;
                                    var futureWind1 = data.daily[0].wind_speed;
                                    var futureHumidity1 = data.daily[0].humidity;
                                    var dateTime1 = DateTime.now().plus({days:1});
                                    var formattedCurrentDate1 = dateTime1.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
                                    $("#date1").text(formattedCurrentDate1);
                                    $("#day1Icon").attr('src',`http://openweathermap.org/img/wn/${futureIconID1}@2x.png`);
                                    $("#day1Temp").text("Temp: "+futureTemp1+" °F");
                                    $("#day1Wind").text("Wind: "+futureWind1+" mph");
                                    $("#day1Humid").text("Humidity: "+futureHumidity1+" %");

                                    // day2
                                    var futureTemp2 = data.daily[1].temp.day;
                                    var futureIconID2 = data.daily[1].weather[0].icon;
                                    var futureWind2 = data.daily[1].wind_speed;
                                    var futureHumidity2 = data.daily[1].humidity;
                                    var dateTime2 = DateTime.now().plus({days:2});
                                    var formattedCurrentDate2 = dateTime2.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
                                    $("#date2").text(formattedCurrentDate2);
                                    $("#day2Icon").attr('src',`http://openweathermap.org/img/wn/${futureIconID2}@2x.png`);
                                    $("#day2Temp").text("Temp: "+futureTemp2+" °F");
                                    $("#day2Wind").text("Wind: "+futureWind2+" mph");
                                    $("#day2Humid").text("Humidity: "+futureHumidity2+" %");

                                    // day3
                                    var futureTemp3 = data.daily[2].temp.day;
                                    var futureIconID3 = data.daily[2].weather[0].icon;
                                    var futureWind3 = data.daily[2].wind_speed;
                                    var futureHumidity3 = data.daily[2].humidity;
                                    var dateTime3 = DateTime.now().plus({days:3});
                                    var formattedCurrentDate3 = dateTime3.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
                                    $("#date3").text(formattedCurrentDate3);
                                    $("#day3Icon").attr('src',`http://openweathermap.org/img/wn/${futureIconID3}@2x.png`);
                                    $("#day3Temp").text("Temp: "+futureTemp3+" °F");
                                    $("#day3Wind").text("Wind: "+futureWind3+" mph");
                                    $("#day3Humid").text("Humidity: "+futureHumidity3+" %");

                                    // day4
                                    var futureTemp4 = data.daily[3].temp.day;
                                    var futureIconID4 = data.daily[3].weather[0].icon;
                                    var futureWind4 = data.daily[3].wind_speed;
                                    var futureHumidity4 = data.daily[3].humidity;
                                    var dateTime4 = DateTime.now().plus({days:4});
                                    var formattedCurrentDate4 = dateTime4.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
                                    $("#date4").text(formattedCurrentDate4);
                                    $("#day4Icon").attr('src',`http://openweathermap.org/img/wn/${futureIconID4}@2x.png`);
                                    $("#day4Temp").text("Temp: "+futureTemp4+" °F");
                                    $("#day4Wind").text("Wind: "+futureWind4+" mph");
                                    $("#day4Humid").text("Humidity: "+futureHumidity4+" %");

                                    // day5
                                    var futureTemp5 = data.daily[4].temp.day;
                                    var futureIconID5 = data.daily[4].weather[0].icon;
                                    var futureWind5 = data.daily[4].wind_speed;
                                    var futureHumidity5 = data.daily[4].humidity;
                                    var dateTime5 = DateTime.now().plus({days:5});
                                    var formattedCurrentDate5 = dateTime5.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
                                    $("#date5").text(formattedCurrentDate5);
                                    $("#day5Icon").attr('src',`http://openweathermap.org/img/wn/${futureIconID5}@2x.png`);
                                    $("#day5Temp").text("Temp: "+futureTemp5+" °F");
                                    $("#day5Wind").text("Wind: "+futureWind5+" mph");
                                    $("#day5Humid").text("Humidity: "+futureHumidity5+" %");

                            // add recent city button
                            var recentButton = document.createElement("button");
                            recentButton.textContent = cityName;
                            document.getElementById('buttonList').appendChild(recentButton);

                                });
                    
                };
            weatherDataPull();
        
                }});
    });