let ph=document.getElementById("num");
function add5()
{
    var hehe;
    hehe=Number(ph.value);
    hehe=hehe+5;
    ph.value=hehe;
}
function sub7() {
    var hehe;
    hehe = Number(ph.value);
    hehe = hehe -7;
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
    hehe = hehe /3;
    ph.value = hehe;
}

function showAdvancedButtons() {
    var advancedButtons = document.getElementById('advanced-buttons');
    advancedButtons.style.display = 'block';
}

function sqr() {
    var hehe;
    hehe = Number(ph.value);
    hehe = Math.pow(hehe,2);
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
    hehe = Math.log10(hehe);
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