let lon;
let lat;
let temperature = document.querySelector('.temp');
let sumary = document.querySelector('.sumary');
let loc = document.querySelector('.location');
let icon = document.querySelector('.icon');

window.addEventListener("load",() => {

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            //ID Api

            const api= "ce47e98113bf9cbdec55d51255db67d7";

            const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + 
            `lon=${lon}&appid=${api}`;

            fetch(url_base)
            .then((response) => {

                return response.json();
            })

            .then((data) =>{
                console.log("Esta es la Data")
                console.log(data);
            })
        })
    }
})
