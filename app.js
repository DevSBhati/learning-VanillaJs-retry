var txtInput = document.querySelector('#txt-input')
var btnTranslate = document.querySelector('#btn-translate')
var outputDiv = document.querySelector('#output')

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(input) {
    return serverUrl + "?" + "text=" + input;
};

function errorHandler(error) {
    console.log("error occured", error)
    alert("error, please try again later!")
};

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslateURL(inputText))
     .then (response => response.json())
     .then (json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch = (errorHandler)  
};

btnTranslate.addEventListener('click', clickHandler)