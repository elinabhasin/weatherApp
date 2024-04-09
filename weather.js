document.addEventListener("DOMContentLoaded", () => {
	
	function updateTime(){
		let currentTime = new Date();
		let hours = currentTime.getHours();
		let mins=currentTime.getMinutes();
		console.log(hours);
	
		if (0 <= hours && hours < 12) {
			document.getElementById("greet").innerText = "Good Morning!";
		} else if (12 <= hours && hours < 16) {
			document.getElementById("greet").innerText = "Good Afternoon!";
		} else {
			document.getElementById("greet").innerText = "Good Evening!";
		}
		if(mins>=0 && mins <=9){
			if(hours==0){
				document.getElementById("time").innerText="12:0"+mins+" AM";
			}else if(hours>=1 && hours<10){
				document.getElementById("time").innerText="0"
				+hours+":0"+mins+" AM";
			}else if(10<=hours && hours<=12){
				document.getElementById("time").innerText=hours+":0"+mins+" PM";
			}else{
				document.getElementById("time").innerText=hours%12+":0"+mins+" PM";
			}
		}else{
			if(hours==0){
				document.getElementById("time").innerText="12:"+mins+" AM";
			}else if(hours>=1 && hours<=9){
				document.getElementById("time").innerText="0"
				+hours+":"+mins+" AM";
			}else if(10<=hours && hours<=12){
				document.getElementById("time").innerText=hours+":"+mins+" PM";
			}else{
				document.getElementById("time").innerText=hours%12+":"+mins+" PM";
			}
		}
		
	
	};
	updateTime();
	setInterval(updateTime(), 60000);
	
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'cedc0ee057msh8166079f341b2e1p1c60b3jsn82bd7e78b951',
				'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
			}
		};
	
		fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?category=environmental', options)
			.then(response => response.json())
			.then((response) => {
				console.log(response);
				// document.getElementById('quote').innerText=response.quote;
				// document.getElementById('author').innerText=response.author;
			});
			
			let cityInput;
			function updateCity(){
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
	const updateAQI=(city)=>{
		fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`, Options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			const overAll=response.overall_aqi;
			if(0<=overAll && overAll<=50){
			   aqival.innerHTML="GOOD";
			   aqival.style.color="green";
			}
			else if(51<=overAll && overAll<=100){
				aqival.innerHTML="MODERATE";
				aqival.style.color="#FEBE10";
			}
			else if(101<=overAll && overAll<=150){
				aqival.innerHTML="UNHEALTHY FOR SENSITIVE GROUPS";
				aqival.style.color="orange";
			}
			else if(151<=overAll && overAll<=200){
				aqival.innerHTML="UNHEALTHY";
				aqival.style.color="red";
			}
			else if(201<=overAll && overAll<=300){
				aqival.innerHTML="VERY UNHEALTHY";
				aqival.style.color="purple";
			}
			else{
				aqival.innerHTML="HAZARDOUS";
				aqival.style.color="maroon";
			}
			
		})
		.catch(err => console.error(err));
	};
	searchButton.addEventListener("click", (e) => {
		e.preventDefault();
		updateCity();
		getWeather(cityInput);
		updateAQI(cityInput);
	});
	city.addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			updateCity();
			getWeather(cityInput);
			updateAQI(cityInput);
		}
	});
	getWeather("Delhi");
	updateAQI("Delhi");
	
	
	const apiKey = '365f8047c54239bd3456ddb23bb7fc16'; // Replace with your OpenWeatherMap API key
	
	const apiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?q=${'Delhi'}&appid=${apiKey}`;
	
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			console.log(data); // Do something with the air pollution data
		})
		.catch(error => {
			console.log('Error fetching air pollution data:', error);
		});
	
		const choice = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'cedc0ee057msh8166079f341b2e1p1c60b3jsn82bd7e78b951',
				'X-RapidAPI-Host': 'air-quality-data6.p.rapidapi.com'
			}
		};
		
			fetch(`https://air-quality-data6.p.rapidapi.com/records?orderBy=dataListIndex_asc&limit=500`, choice)
				.then(response => response.json())
				.then((response) => {
					console.log(response);
				})
				.catch(err => console.error(err));
		
	
	
	})