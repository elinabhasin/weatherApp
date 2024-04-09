document.addEventListener("DOMContentLoaded", () => {
    let cityInput;
    function updateCity(){
        cityInput = document.getElementById("city1").value;
        document.getElementById("cityName1").innerText = cityInput;
    };
    const searchButton = document.getElementById("search1");


    searchButton.addEventListener("click", (e) => {
		e.preventDefault();
		updateCity();

	});
	city1.addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			updateCity();
		}
	});

});