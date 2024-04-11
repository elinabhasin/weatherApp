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

        let timeText;
        if (mins >= 0 && mins <= 9) {
            timeText = (hours === 0 ? "12:0" : hours < 10 ? "0" + hours : hours) + ":0" + mins + (hours >= 12 ? " PM" : " AM");
        } else {
            timeText = (hours === 0 ? "12:" : hours < 10 ? "0" + hours + ":" : hours) + mins + (hours >= 12 ? " PM" : " AM");
        }
        document.getElementById("time").innerText = timeText;
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
                document.getElementById("author").innerHTML = "-"+author;
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
                feelsLike.innerHTML = response.feels_like;
                humidval.innerHTML = response.humidity;
                windval.innerHTML = response.wind_speed;
            })
            .catch(err => console.error(err));
    };

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

    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        updateCity();
        getWeather(cityInput);
        updateAQI(cityInput);
        updateTime();
        updatequote(); // Call updatequote when search button is clicked
    });

    city.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            updateCity();
            getWeather(cityInput);
            updateAQI(cityInput);
            updateTime();
            updatequote(); // Call updatequote when Enter key is pressed
        }
    });

    getWeather("Delhi");
    updateAQI("Delhi");

});
