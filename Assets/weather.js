var key = '87c665b742be795e11aff3f1eb9bf566';
var city = "Minneapolis";
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS');
var cityHistory =[];

$('.search').on("click", function (event) {
    event.preventDefault();
    city = $(this);
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
		btnEl.addClass('btn btn-outline-secondary histBtn');
		btnEl.attr('type', 'button');

		contHistEl.prepend(rowEl);
		rowEl.append(btnEl);
	} if (!city) {
		return;
	}


}





