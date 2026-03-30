var redSlider   = document.getElementById('red');
var greenSlider = document.getElementById('green');
var blueSlider  = document.getElementById('blue');

var text = document.getElementById('text');

function updateColor() {
    var r = redSlider.value;
    var g = greenSlider.value;
    var b = blueSlider.value;

    var colorString = 'rgb(' + r + ',' + g + ',' + b + ')';

    text.style.color = colorString;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

updateColor();
