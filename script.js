

const API_KEY = 'e57a5380b4104bcb6209f1611a41e675';
console.log(API_KEY);



getWeatherData = () => {
    const city = document.getElementById('search-bar').value;
    console.log(city);
    

    if (city === ""){
        alert("Please enter a city name");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        document.getElementById('city-name').innerText = data.name;
        document.getElementById('weather-type').innerText = ` ${data.weather[0].description}`;
        document.getElementById('Temperature').innerText = ` ${data.main.temp}`;
        document.getElementById('Min-Temp').innerText = ` ${data.main.temp_min}`; 
        document.getElementById('Max-Temp').innerText = ` ${data.main.temp_max}`;
        console.log(data);
        
    })
    .catch(error => console.error(error));

};




