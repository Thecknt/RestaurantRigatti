let lon;
let lat;
let temperature = document.querySelector('.temp');
let summary = document.querySelector('.summary');
let loc = document.querySelector('.location');
let icon = document.querySelector('.icon');
const kelvin = 273.15

window.addEventListener("load",() => {

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
        
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            //ID Api

            const api= "ce47e98113bf9cbdec55d51255db67d7";

            const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + 
            `lon=${lon}&appid=${api}`;

            console.log(url_base);
            fetch(url_base)
            .then((response) => {

                return response.json();
            })

            .then((data) =>{
                
                temperature.textContent = 
                Math.floor(data.main.temp - kelvin) + "°C";
                summary.textContent = data.weather[0].description;
                loc.textContent = data.name + ", " + data.sys.country;
                let iconImg = data.weather[0].icon;
                icon = `https://openweathermap.org/img/wn/${iconImg}.png`
            });
        });
    };
});
