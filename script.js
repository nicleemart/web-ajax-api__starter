window.addEventListener("load", function(){

	var apiRequest = new XMLHttpRequest();

		apiRequest.addEventListener("load", function(e){

			var apiResponse = JSON.parse(e.target.responseText);
			debugger;
			var currentSummary = document.getElementById("currentSummary");
			var currentTemp = document.getElementById("currentTemp");
			var todayHigh = document.getElementById("todayHigh");
			var todayLow = document.getElementById("todayLow");
			var dailySummary = document.getElementById("dailySummary");
			var rainChance = document.getElementById("rainChance");
			var humidity = document.getElementById("humidity");

			currentSummary.innerHTML = apiResponse.currently.summary;
			currentTemp.innerHTML = apiResponse.currently.apparentTemperature;
			todayHigh.innerHTML = apiResponse.daily.data[0].apparentTemperatureMax;
			todayLow.innerHTML = apiResponse.daily.data[0].apparentTemperatureMin;
			dailySummary.innerHTML = apiResponse.daily.summary;
			rainChance.innerHTML = apiResponse.daily.data[0].precipProbability + "%";
			humidity.innerHTML = apiResponse.daily.data[0].humidity + "%";

		});

    apiRequest.open("GET", "api");
    apiRequest.send();

});