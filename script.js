let color1 = document.querySelector("#picker1");
let color2 = document.querySelector("#picker2");
let gradientCode = document.querySelector('#gradientCode');

gradientCode.innerHTML = (`Linear Gradient of colors ${color1.value} and ${color2.value}`);

function gradient() {
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    gradientCode.innerHTML = (`Linear Gradient of colors ${color1.value} and ${color2.value}`);
}

color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);