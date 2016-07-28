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
			var sunrise = document.getElementById("sunrise");
			var sunset = document.getElementById("sunset");
			var rainChance = document.getElementById("rainChance");
			var humidity = document.getElementById("humidity");
			var wind = document.getElementById("wind");
			var feelsLike = document.getElementById("feelsLike");
			var precipAmount = document.getElementById("precipAmount");
			var pressure = document.getElementById("pressure");
			var visibility = document.getElementById("visibility");

			currentSummary.innerHTML = apiResponse.currently.summary;
			currentTemp.innerHTML = Math.round(apiResponse.currently.apparentTemperature) + "&deg;";
			todayHigh.innerHTML = Math.round(apiResponse.daily.data[0].temperatureMax) + "&deg;";
			todayLow.innerHTML = Math.round(apiResponse.daily.data[0].temperatureMin) + "&deg;";
			dailySummary.innerHTML = apiResponse.daily.summary;
			sunrise.innerHTML = convertTime(apiResponse.daily.data[0].sunriseTime);
			sunset.innerHTML = convertTime(apiResponse.daily.data[0].sunsetTime);
			rainChance.innerHTML = apiResponse.daily.data[0].precipProbability + "%";
			humidity.innerHTML = apiResponse.daily.data[0].humidity * 100 + "%";
			wind.innerHTML = apiResponse.daily.data[0].windSpeed;
			feelsLike.innerHTML = Math.round(apiResponse.daily.data[0].apparentTemperatureMax) + "&deg;";
			precipAmount.innerHTML = apiResponse.daily.data[0].precipIntensity + " in";
			pressure.innerHTML = apiResponse.daily.data[0].pressure;
			visibility.innerHTML = apiResponse.daily.data[0].visibility + " mi";

		});

    apiRequest.open("GET", "api");
    apiRequest.send();

    function convertTime (unixTime){
    	var date = new Date(unixTime*1000);
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		return hours + ':' + minutes.substr(-2);
    }

});