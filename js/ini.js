// ini js 
var cF = document.getElementById("c-f");
var fC = document.getElementById("f-c");
// celcius
let pcelciusc = document.getElementById('ccelcius');
let pfahrenheitc = document.getElementById('cfahrenheit');
let pkalkulasic = document.getElementById('ckalkulasi');

var konvertc = document.getElementById('cconvert');
konvertc.addEventListener("click", btnConvertc);

var resetFormc = document.getElementById('creset');
resetFormc.addEventListener("click", btnResetc);

// var reverseFormc = document.getElementById('creverse');
// reverseFormc.addEventListener("click", btnReversec);

// btn celcius
function btnConvertc(){
        if(isNaN(pcelciusc.value)){
            alert("Tau Angka GAK!");
        }else{
            pfahrenheitc.value = ((pcelciusc.value *9) /5 + 32) + "°F";
            pkalkulasic.value = "("+ pcelciusc.value + "°C  ×  9/5)  +  32 = "+ pfahrenheitc.value;
        }
}

function btnResetc(){
    pcelciusc.value = "";
    pfahrenheitc.value = "";
    pkalkulasic.value = "";
}

// fahrenheit
let pcelciusf = document.getElementById("fcelcius");
let pfahrenheitf = document.getElementById("ffahrenheit");
let pkalkulasif = document.getElementById('fkalkulasi');

var konvertf = document.getElementById('fconvert');
konvertf.addEventListener("click", btnConvertf);

var resetFormf = document.getElementById('freset');
resetFormf.addEventListener("click", btnResetf);

// var reverseFormf = document.getElementById("freverse");
// resetFormf.addEventListener("click",btnReversef);

// btn fahrenheit
function btnConvertf(){
    if(isNaN(pfahrenheitf.value)){
        alert("Tau Angka GAK!");
    }else{
        pcelciusf.value = (((pfahrenheitf.value - 32) *5)/9 ).toFixed(2) + "°C";
        pkalkulasif.value = "("+ pfahrenheitf.value + "°F  -  32) ×  5/9 = "+ pcelciusf.value;
    }
}

function btnResetf(){
pcelciusf.value = "";
pfahrenheitf.value = "";
pkalkulasif.value = "";
}

let iniReverse = true;
function btnReverse(){
    if(iniReverse){
        fC.style.display = "flex";
        cF.style.display = "none";
        iniReverse = false;
    }else{
        fC.style.display = "none";
        cF.style.display = "flex";
        iniReverse = true;
    }
}


// function btnReversef(){
//         fC.style.display = "none";
//         cF.style.display = "flex";
//         iniReversef =
// }