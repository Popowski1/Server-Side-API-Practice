var key = '87c665b742be795e11aff3f1eb9bf566';
var city = "Minneapolis";
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS');
var cityHistory =[];

$('.search').on("click", function (event) {
    event.preventDefault();
    city = $(this).parent('.btnPar').siblings('.textVal').val().trim();;
    if (city === '') {
        return;
    };
    cityHistory.push(city);
    localStorage.setItem('city', JSON.stringify(cityHist));
	fiveForecastEl.empty();
	getHistory();
	getWeatherToday();
});

var contHistEl = $('.cityHist');
function getHistory() {
    contHistEl.empty();
for (let i = 0; i < cityHistory.length; i++) {
    
    var rowEl = $('<row>');
		var btnEl = $('<button>').text(`${cityHistory[i]}`)

        rowEl.addClass('row histBtnRow');
		btnEl.addClass('btn histBtn');
		btnEl.attr('type', 'button');

		contHistEl.prepend(rowEl);
		rowEl.append(btnEl);
	} if (!city) {
		return;
	}

	$('histBtn').on("click", function (event) {
		event.preventDefault();
		city = $(this).text();
		fiveForecastEl.empty();
		getWeatherToday();
	});


};

var todayForecast = $('.containForecast')
function getWeatherToday() {
var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&units=imperial&appid=87c665b742be795e11aff3f1eb9bf566`;
$(todayForecast).empty();

$.ajax({
	url: currentUrl,
	method: 'GET',}).then(function (response) {$('.todayForecastMinneapolis').text(response.name);
	{$('.todayForecastDate').text(date);
	$('.icons').attr('src', `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`);
	var elTempfeel = $('<p>').text(`Temperature: ${response.main.temp} °F`);
	todayForecast.append(pEl);
	var elTemp = $('<p>').text(`Feels Like: ${response.main.feels_like} °F`);
	todayForecast.append(pEl);
	var elHumid = $('<p>').text(`Humidity: ${response.main.humidity} %`);
	todayForecast.append(pEl);
	var elWind = $('<p>').text(`Wind Speed: ${response.wind.speed} MPH`);
	todayForecast.append(pEl);
	};
})
getWeatherToday};

var fiveForecastEl = $('.containFiveforecast');
function getFiveday() {`https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&units=imperial&appid=87c665b742be795e11aff3f1eb9bf566`;
$.ajax({
	url: getFiveday,
	method: 'GET', }).then(function (response) {
		var fiveDayarray = response.list;
		var weathArray =[];
	});

	for (let i = 0; i < weathArray.length; i++) {
		var elCard = $('<div>');
		elCard.attr('class','card');
		elCard.attr('style','max-width: 300px;');
		fiveForecastEl.append(elCard);
	}



