let ph = document.getElementById("num");
function add5() {
    var hehe;
    hehe = Number(ph.value);
    hehe = hehe + 5;
    ph.value = hehe;
}
function sub7() {
    var hehe;
    hehe = Number(ph.value);
    hehe = hehe - 7;
    ph.value = hehe;
}
function mul8() {
    var hehe;
    hehe = Number(ph.value);
    hehe = hehe * 8;
    ph.value = hehe;
}
function div3() {
    var hehe;
    hehe = Number(ph.value);
    hehe = hehe / 3;
    ph.value = hehe;
}

// function showAdvancedButtons() {

// }

document.getElementById('adv').addEventListener('click', function () {
    var additionalButtons = document.getElementById('advanced-buttons');
    var toggleButton = document.getElementById('adv');

    if (additionalButtons.style.display === 'none' || additionalButtons.style.display === '') {
        additionalButtons.style.display = 'block';
        toggleButton.textContent = 'Close';
    } else {
        additionalButtons.style.display = 'none';
        toggleButton.textContent = 'Advanced';
    }
});

function sqr() {
    var hehe;
    hehe = Number(ph.value);
    hehe = Math.pow(hehe, 2);
    ph.value = hehe;
}
function sqrt() {
    var hehe;
    hehe = Number(ph.value);
    hehe = Math.sqrt(hehe);
    ph.value = hehe;
}
function sin() {
    var hehe;
    hehe = Number(ph.value);
    hehe = Math.sin(hehe);
    ph.value = hehe;
}
function log10() {
    var hehe;
    hehe = Number(ph.value);
    hehe = parseFloat(Math.log10(hehe));
    ph.value = hehe;
}
function floor() {
    var hehe;
    hehe = Number(ph.value);
    hehe = Math.floor(hehe);
    ph.value = hehe;
}
function ceil() {
    var hehe;
    hehe = Number(ph.value);
    hehe = Math.ceil(hehe);
    ph.value = hehe;
}
