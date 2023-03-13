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

    if (inputtypevalue === "kilogram" && resulttypevalue === "gram"){
        result.value = (input.value) *  1000;
    } else if (inputtypevalue === "kilogram" && resulttypevalue === "miligram"){
        result.value = (input.value) *  1000000;
    }

    if (inputtypevalue === "gram" && resulttypevalue === "kilogram"){
        result.value = (input.value) /  1000;
    } else if (inputtypevalue === "gram" && resulttypevalue === "miligram"){
        result.value = (input.value) *  1000;
    }

    if (inputtypevalue === "miligram" && resulttypevalue === "gram"){
        result.value = (input.value) /  1000;
    } else if (inputtypevalue === "miligram" && resulttypevalue === "kilogram"){
        result.value = (input.value) /  1000000;
    }


}