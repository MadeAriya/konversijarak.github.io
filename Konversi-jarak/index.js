var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
var inputtypevalue,resultinputtypevalue;

input.addEventListener("keyup", konversi);
inputtype.addEventListener("change", konversi);
resulttype.addEventListener("change", konversi);

inputtypevalue = inputtype.value;
resulttypevalue = resulttype.value;

function konversi(){
    inputtypevalue = inputtype.value;
    resulttypevalue = resulttype.value;

    if (inputtypevalue === "meter" && resulttypevalue === "kilometer"){
        result.value = (input.value) /  1000;
    } else if (inputtypevalue === "meter" && resulttypevalue === "centimeter"){
        result.value = (input.value) *  100;
    }

    if (inputtypevalue === "kilometer" && resulttypevalue === "meter"){
        result.value = (input.value) *  1000;
    } else if (inputtypevalue === "kilometer" && resulttypevalue === "centimeter"){
        result.value = (input.value) *  100000;
    }

    if (inputtypevalue === "centimeter" && resulttypevalue === "meter"){
        result.value = (input.value) /  100;
    } else if (inputtypevalue === "centimeter" && resulttypevalue === "kilometer"){
        result.value = (input.value) /  100000;
    }


}