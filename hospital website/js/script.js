let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


if ('geolocation' in navigator){
    console.log ('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    });
}else {
    console.log ('geolocation not available');
}

const sucessfulLookup = (position) =>{
    const {lattitude ,longitude}= position.coords;
    const self= this;
    fetch ('https://api.opencagedata.com/geocode/v1/json?q=${lattitude}+{longitude}&key=0e4d7d46374b4894a7d31af02107372d')
    .then (response = response.json())
    .then (console.log);
};         


