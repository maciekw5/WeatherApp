const input = document.querySelector('.input-box-input');
const searchBtn = document.querySelector('.search-navbar__btn');
const cityName = document.querySelector('.cityname');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const weather = document.querySelector('.weather');
const feelsLike = document.querySelector('.feels-like');
const minTemp = document.querySelector('.min-temp');
const maxTemp = document.querySelector('.max-temp');
const animationItem = document.querySelector('.animation-item');
const pWarning = document.querySelector('.warning');
const weatherIcon = document.querySelector('.weather-icon');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=0f2f74ba7f606c9d83b9af6957871138';
const API_UNITS = '&units=metric';

const getWeather = () => {
	const city = input.value || 'Warszawa';
	const URL = API_LINK + city + API_KEY + API_UNITS;
	cityName.textContent = city;

	axios
		.get(URL)
		.then((res) => {
			const object = res.data.main;

			const temp = object.temp;
			const hum = object.humidity;
			const feels = object.feels_like;
			const min = object.temp_min;
			const max = object.temp_max;
			const iconId = res.data.weather[0].id;

			temperature.textContent = Math.floor(temp) + '℃';
			humidity.textContent = hum + '%';
			feelsLike.textContent = Math.floor(feels) + '℃';
			minTemp.textContent = Math.floor(min) + '°' + ' ' + '~' + ' ';
			maxTemp.textContent = Math.floor(max) + '°';

			input.value = '';
			pWarning.textContent = '';

			if (iconId >= 200 && iconId <= 232) {
				weatherIcon.setAttribute(
					'src',
					'./img/storm.png'
				);

                document.body.style.backgroundImage = 'linear-gradient(45deg, rgba(25,33,101,1) 55%, rgba(1,4,29,1) 87%)'


			} else if (iconId >= 300 && iconId <= 321) {
				weatherIcon.setAttribute(
					'src',
					'./img/drizzle.png'
				);

                document.body.style.backgroundImage = 'linear-gradient(45deg, rgba(43,75,111,1) 55%, rgba(71,151,168,1) 87%)'

              


			} else if (iconId >= 500 && iconId <= 531) {
				weatherIcon.setAttribute(
					'src',
					'./img/rain.png'
				);

                document.body.style.backgroundImage = 'linear-gradient(45deg, rgba(42,65,150,1) 55%, rgba(31,121,140,1) 87%)'

              


			} else if (iconId >= 600 && iconId <= 622) {
				weatherIcon.setAttribute(
					'src',
					'./img/snow.png'
				);

                document.body.style.backgroundImage = 'linear-gradient(45deg, rgba(152,152,152,1) 32%, rgba(22,44,124,1) 88%)'

                


			} else if (iconId >= 701 && iconId <= 781) {
				weatherIcon.setAttribute(
					'src',
					'./img/clouds.png'
				);

                document.body.style.backgroundImage = 'linear-gradient(45deg, rgba(56,56,56,1) 27%, rgba(119,115,115,1) 83%)'


			} else if (iconId >= 801 && iconId <= 804) {
				weatherIcon.setAttribute(
					'src',
					'./img/mist.png'
				);

                document.body.style.backgroundImage = 'linear-gradient(45deg, rgba(56,56,56,1) 27%, rgba(119,115,115,1) 83%)'


			} else {
				weatherIcon.setAttribute(
					'src',
					'./img/sun.png'
                    );

                    document.body.style.backgroundImage = 'linear-gradient(45deg, rgba(124,106,75,1) 27%, rgba(224,186,135,1) 83%)'
                   

			} 

			console.log(animationItem);
			console.log(iconId);
		})
		.catch(() => {
			cityName.textContent = 'Well...';
			pWarning.textContent = 'Incorrect city name!';
            weatherIcon.setAttribute('src', './img/confused.png')
		});
};

const checkEnter = (e) => {
	if (e.key === 'Enter') {
		getWeather();
	}
};

getWeather();

searchBtn.addEventListener('click', getWeather);
input.addEventListener('keyup', checkEnter);
