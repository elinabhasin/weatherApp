
document.addEventListener("DOMContentLoaded", () => {
    let cityInput;

    function updateCity() {
        cityInput = document.getElementById("city1").value;
        document.getElementById("cityName1").innerText = cityInput;
    }

    const searchButton = document.getElementById("search1");

    function updatetime1() {
        let currenttime1 = new Date();
        let hours = currenttime1.getHours();
        let mins = currenttime1.getMinutes();

        if (mins >= 0 && mins <= 9) {
            if (hours == 0) {
                document.getElementById("time1").innerText = "12:0" + mins + " AM";
            } else if (hours >= 1 && hours < 10) {
                document.getElementById("time1").innerText = "0" + hours + ":0" + mins + " AM";
            } else if (10 <= hours && hours <= 12) {
                document.getElementById("time1").innerText = hours + ":0" + mins + " PM";
            } else {
                document.getElementById("time1").innerText = hours % 12 + ":0" + mins + " PM";
            }
        } else {
            if (hours == 0) {
                document.getElementById("time1").innerText = "12:" + mins + " AM";
            } else if (hours >= 1 && hours <= 9) {
                document.getElementById("time1").innerText = "0" + hours + ":" + mins + " AM";
            } else if (10 <= hours && hours <= 12) {
                document.getElementById("time1").innerText = hours + ":" + mins + " PM";
            } else {
                document.getElementById("time1").innerText = hours % 12 + ":" + mins + " PM";
            }
        }
    }

    updatetime1();

    const Options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cedc0ee057msh8166079f341b2e1p1c60b3jsn82bd7e78b951',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };

    function updateAQI(city) {
        fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`, Options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                const overAll = response.overall_aqi;
                document.getElementById('aqival1').innerHTML = overAll;
                if (0 <= overAll && overAll <= 50) {
                    document.getElementById('aqistring').innerHTML = "GOOD";
                    document.getElementById('aqistring').style.color = "green";
                } else if (51 <= overAll && overAll <= 100) {
                    document.getElementById('aqistring').innerHTML = "MODERATE";
                    document.getElementById('aqistring').style.color = "#FEBE10";
                } else if (101 <= overAll && overAll <= 150) {
                    document.getElementById('aqistring').innerHTML = "UNHEALTHY FOR SENSITIVE GROUPS";
                    document.getElementById('aqistring').style.color = "orange";
                } else if (151 <= overAll && overAll <= 200) {
                    document.getElementById('aqistring').innerHTML = "UNHEALTHY";
                    document.getElementById('aqistring').style.color = "red";
                } else if (201 <= overAll && overAll <= 300) {
                    document.getElementById('aqistring').innerHTML = "VERY UNHEALTHY";
                    document.getElementById('aqistring').style.color = "purple";
                } else {
                    document.getElementById('aqistring').innerHTML = "HAZARDOUS";
                    document.getElementById('aqistring').style.color = "maroon";
                }

                updateaqiparams(response);
            })
            .catch(err => console.error(err));
    }

    function updateaqiparams(data) {
        Object.keys(data).forEach(parameter => {
            const concentration = data[parameter].concentration;
            const aqi = data[parameter].aqi;
			if (parameter.toLowerCase() === 'pm2.5') {
				document.getElementById('pm25concval').innerText = concentration;
				document.getElementById('pm25aqival').innerText = aqi;
			} else if (parameter.toLowerCase() === 'pm10') {
				document.getElementById('pm10concval').innerText = concentration;
				document.getElementById('pm10aqival').innerText = aqi;
			} else {
				document.getElementById(`${parameter.toLowerCase()}concval`).innerText = concentration;
				document.getElementById(`${parameter.toLowerCase()}aqival`).innerText = aqi;
			}
        });
    }
    updateAQI("Delhi");

    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        updateCity();
        updatetime1();
        updateAQI(cityInput);
    });

    city1.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            updateCity();
            updatetime1();
            updateAQI(cityInput);
        }
    });

});
