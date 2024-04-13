document.addEventListener("DOMContentLoaded", () => {

    function updateTime() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let mins = currentTime.getMinutes();
        console.log(hours);

        if (0 <= hours && hours < 12) {
            document.getElementById("greet").innerText = "Good Morning!";
        } else if (12 <= hours && hours < 16) {
            document.getElementById("greet").innerText = "Good Afternoon!";
        } else {
            document.getElementById("greet").innerText = "Good Evening!";
        }

        if (mins >= 0 && mins <= 9) {
            if (hours == 0) {
                document.getElementById("time").innerText = "12:0" + mins + " AM";
            } else if (hours >= 1 && hours < 10) {
                document.getElementById("time").innerText = "0"
                    + hours + ":0" + mins + " AM";
            } else if (10 <= hours && hours <= 12) {
                document.getElementById("time").innerText = hours + ":0" + mins + " PM";
            } else {
                document.getElementById("time").innerText = hours % 12 + ":0" + mins + " PM";
            }
        } else {
            if (hours == 0) {
                document.getElementById("time").innerText = "12:" + mins + " AM";
            } else if (hours >= 1 && hours <= 9) {
                document.getElementById("time").innerText = "0"
                    + hours + ":" + mins + " AM";
            } else if (10 <= hours && hours <= 12) {
                document.getElementById("time").innerText = hours + ":" + mins + " PM";
            } else {
                document.getElementById("time").innerText = hours % 12 + ":" + mins + " PM";
            }
        }
    };

    updateTime();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cedc0ee057msh8166079f341b2e1p1c60b3jsn82bd7e78b951',
            'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
        }
    };

    function updatequote() {
        fetch(`https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?category=environmental`, options)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                const quote = data && data.length > 0 ? data[0].quote : "No quote available";
                const author = data && data.length > 0 ? data[0].author : "Unknown";
                document.getElementById("quote").innerHTML = quote;
                document.getElementById("author").innerHTML = "-" + author;
            })
            .catch(err => console.error(err));
    };
    updatequote();

    let cityInput;
    function updateCity() {
        cityInput = document.getElementById("city").value;
        document.getElementById("cityName").innerText = cityInput;
    };

    const searchButton = document.getElementById("search");

    const choices = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cedc0ee057msh8166079f341b2e1p1c60b3jsn82bd7e78b951',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, choices)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                temp.innerHTML = response.temp;
                cloudpct.innerHTML = response.cloud_pct;
                feelsLike.innerHTML = response.feels_like;
                humidval.innerHTML = response.humidity;
                windval.innerHTML = response.wind_speed;
                mintempval.innerHTML = response.min_temp;
                maxtempval.innerHTML = response.max_temp;
                winddegval.innerHTML = response.wind_degrees;
            })
            .catch(err => console.error(err));
    };
    const updatetable = () => {

        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo`, choices)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                document.getElementById('Tokyotemp').innerHTML = response.temp;
                document.getElementById('Tokyorise').innerHTML = response.sunrise;
                document.getElementById('Tokyoset').innerHTML = response.sunset;
                document.getElementById("Tokyofeel").innerHTML = response.feels_like;
                document.getElementById("Tokyowind").innerHTML = response.wind_speed;
                document.getElementById("minTokyotemp").innerHTML = response.min_temp;
                document.getElementById("maxTokyotemp").innerHTML = response.max_temp;
            })
            .catch(err => console.error(err));
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai`, choices)
            .then(response => response.json())
            .then((response) => {
                console.log(response);

                document.getElementById('Shanghaitemp').innerHTML = response.temp;
                document.getElementById('Shanghairise').innerHTML = response.sunrise;
                document.getElementById('Shanghaiset').innerHTML = response.sunset;
                document.getElementById("Shanghaifeel").innerHTML = response.feels_like;
                document.getElementById("Shanghaiwind").innerHTML = response.wind_speed;
                document.getElementById("minShanghaitemp").innerHTML = response.min_temp;
                document.getElementById("maxShanghaitemp").innerHTML = response.max_temp;
            })
            .catch(err => console.error(err));
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London`, choices)
            .then(response => response.json())
            .then((response) => {
                console.log(response);

                document.getElementById('Londontemp').innerHTML = response.temp;
                document.getElementById('Londonrise').innerHTML = response.sunrise;
                document.getElementById('Londonset').innerHTML = response.sunset;
                document.getElementById("Londonfeel").innerHTML = response.feels_like;
                document.getElementById("Londonwind").innerHTML = response.wind_speed;
                document.getElementById("minLondontemp").innerHTML = response.min_temp;
                document.getElementById("maxLondontemp").innerHTML = response.max_temp;
            })
            .catch(err => console.error(err));
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi`, choices)
            .then(response => response.json())
            .then((response) => {
                console.log(response);

                document.getElementById('NewDelhitemp').innerHTML = response.temp;
                document.getElementById('NewDelhirise').innerHTML = response.sunrise;
                document.getElementById('NewDelhiset').innerHTML = response.sunset;
                document.getElementById("NewDelhifeel").innerHTML = response.feels_like;
                document.getElementById("NewDelhiwind").innerHTML = response.wind_speed;
                document.getElementById("minNewDelhitemp").innerHTML = response.min_temp;
                document.getElementById("maxNewDelhitemp").innerHTML = response.max_temp;
            })
            .catch(err => console.error(err));
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New&York`, choices)
            .then(response => response.json())
            .then((response) => {
                console.log(response);

                document.getElementById('NewYorktemp').innerHTML = response.temp;
                document.getElementById('NewYorkrise').innerHTML = response.sunrise;
                document.getElementById('NewYorkset').innerHTML = response.sunset;
                document.getElementById("NewYorkfeel").innerHTML = response.feels_like;
                document.getElementById("NewYorkwind").innerHTML = response.wind_speed;
                document.getElementById("minNewYorktemp").innerHTML = response.min_temp;
                document.getElementById("maxNewYorktemp").innerHTML = response.max_temp;
            })
            .catch(err => console.error(err));
    };
    updatetable();
    const Options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cedc0ee057msh8166079f341b2e1p1c60b3jsn82bd7e78b951',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };

    const updateAQI = (city) => {
        fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`, Options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                const overAll = response.overall_aqi;
                if (0 <= overAll && overAll <= 50) {
                    aqival.innerHTML = "GOOD";
                    aqival.style.color = "green";
                } else if (51 <= overAll && overAll <= 100) {
                    aqival.innerHTML = "MODERATE";
                    aqival.style.color = "#FEBE10";
                } else if (101 <= overAll && overAll <= 150) {
                    aqival.innerHTML = "UNHEALTHY FOR SENSITIVE GROUPS";
                    aqival.style.color = "orange";
                } else if (151 <= overAll && overAll <= 200) {
                    aqival.innerHTML = "UNHEALTHY";
                    aqival.style.color = "red";
                } else if (201 <= overAll && overAll <= 300) {
                    aqival.innerHTML = "VERY UNHEALTHY";
                    aqival.style.color = "purple";
                } else {
                    aqival.innerHTML = "HAZARDOUS";
                    aqival.style.color = "maroon";
                }

            })
            .catch(err => console.error(err));
    };
    const Choices = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cedc0ee057msh8166079f341b2e1p1c60b3jsn82bd7e78b951',
            'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
        }
    };
    const getlatlong = (city) => {
        fetch(`https://maps-data.p.rapidapi.com/geocoding.php?query=${city}&lang=en`, Choices)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                updatelatlong(response);
            })
            .catch(err => console.error(err));
    };
    const Choices1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cedc0ee057msh8166079f341b2e1p1c60b3jsn82bd7e78b951',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };

    const getchartdata = (lat, long) => {
        const currentDate = new Date();
        const futureDate = new Date(currentDate);
        futureDate.setDate(futureDate.getDate() + 5);

        const formattedCurrentDate = formatDate(currentDate);
        const formattedFutureDate = formatDate(futureDate);

        fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${long}`, Choices1)
            .then(response => response.json())
            .then((response) => {
                console.log(response);

                // Filter the data for the specific 5 days
                const filteredData = response.data.filter(entry => {
                    const entryDate = new Date(entry.timestamp_local);
                    return entryDate >= currentDate && entryDate < futureDate;
                });

                // Extracting date, timestamp_local, and temperature for each entry
                const extractedData = filteredData.map(entry => {
                    return {
                        date: entry.timestamp_local.substring(0, 10), // Extracting date
                        time: entry.timestamp_local.substring(11, 16), // Extracting time
                        temperature: entry.temp, // Extracting temperature
                    };
                });

                // Logging the extracted data to the console
                console.log(extractedData);
                const csvData = "Date,Time,Temperature (°C)\n" + extractedData.map(entry => `${entry.date},${entry.time},${entry.temperature}`).join("\n");

                console.log(csvData);
            })
            .catch(err => console.error(err));
    };



    // Function to format date in 'YYYY-MM-DD' format
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    updatelatlong({
        "data": {
            "address": "Delhi",
            "lat": 28.7040592,
            "lng": 77.10249019999999,
            "timezone": "Asia/Calcutta"
        }

    });

    function updatelatlong(data) {
        Object.keys(data).forEach(parameter => {
            const lat = data[parameter].lat;
            const long = data[parameter].lng;
            const timezone = data[parameter].timezone;
            console.log(lat);
            console.log(long);
            console.log(timezone);
            getchartdata(lat, long);
        });

    };
    getlatlong("Delhi");



    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        updateCity();
        getWeather(cityInput);
        updateAQI(cityInput);
        updateTime();
        updatequote();
        getlatlong(cityInput);
        // getchartdata(lat,long);
    });

    city.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            updateCity();
            getWeather(cityInput);
            updateAQI(cityInput);
            updateTime();
            updatequote();
            getlatlong(cityInput);
            // getchartdata(lat,long);
        }
    });

    getWeather("Delhi");
    updateAQI("Delhi");


});
