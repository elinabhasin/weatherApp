document.addEventListener("DOMContentLoaded", () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    console.log(hours);

    if (0 <= hours && hours < 12) {
        document.getElementById("greet").innerText = "Good Morning!";
    } else if (12 <= hours && hours < 16) {
        document.getElementById("greet").innerText = "Good Afternoon!";
    } else {
        document.getElementById("greet").innerText = "Good Evening!";
    }

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
    
		function updateCity(){
			const cityInput = document.getElementById("city").value;
			document.getElementById("cityName").innerText = cityInput;
		};

    const searchButton = document.getElementById("search");
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
		updateCity();
    });
	
	city.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            updateCity();
        }
    });
});
