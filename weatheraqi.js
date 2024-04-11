
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
					document.getElementById('riskstring').innerHTML="Enjoy your usual outdoor activities.";
					document.getElementById('noriskstring').innerHTML="Ideal air quality for outdoor activities";
                } else if (51 <= overAll && overAll <= 100) {
                    document.getElementById('aqistring').innerHTML = "MODERATE";
                    document.getElementById('aqistring').style.color = "#FEBE10";
					document.getElementById('riskstring').innerHTML="Consider reducing or rescheduling strenuous activities outdoors if you are experiencing symptoms.";
					document.getElementById('noriskstring').innerHTML="No need to modify your usual outdoor activities unless you experience symptoms such as coughing and throat irritation.";
                } else if (101 <= overAll && overAll <= 150) {
                    document.getElementById('aqistring').innerHTML = "UNHEALTHY FOR SENSITIVE GROUPS";
                    document.getElementById('aqistring').style.color = "orange";
					document.getElementById('riskstring').innerHTML="Reduce or reschedule strenuous activities outdoors. Children and the elderly should also take it easy.";
					document.getElementById('noriskstring').innerHTML="Consider reducing or rescheduling strenuous activities outdoors if you experience symptoms such as coughing and throat irritation.";
                } else if (151 <= overAll && overAll <= 200) {
                    document.getElementById('aqistring').innerHTML = "UNHEALTHY";
                    document.getElementById('aqistring').style.color = "red";
					document.getElementById('riskstring').innerHTML="Avoid strenuous outdoor activities.";
					document.getElementById('noriskstring').innerHTML="Cut back or reschedule strenuous outdoor activities.";
                } else if (201 <= overAll && overAll <= 300) {
                    document.getElementById('aqistring').innerHTML = "VERY UNHEALTHY";
                    document.getElementById('aqistring').style.color = "purple";
					document.getElementById('riskstring').innerHTML="Avoid all outdoor physical activities.";
					document.getElementById('noriskstring').innerHTML="Significantly cut back on outdoor physical activities.";
                } else { 
                    document.getElementById('aqistring').innerHTML = "HAZARDOUS";
                    document.getElementById('aqistring').style.color = "maroon";
					document.getElementById('riskstring').innerHTML="Avoid strenuous activities outdoors. Children and the elderly should also avoid outdoor physical exertion.";
					document.getElementById('noriskstring').innerHTML="Reduce or reschedule strenuous activities outdoors, especially if you experience symptoms such as coughing and throat irritation.";
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
