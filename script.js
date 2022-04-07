let getQuoteBtn = document.querySelector('.new-quote');
let copyBtn = document.querySelector('.copy');
let listenBtn = document.querySelector('.listen');
let theQuote = document.querySelector('blockquote');
let theQuoteAuthor = document.querySelector('.quotee');
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function GetQuote() {
    /* $.ajaxSetup({
        headers:{
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
            'X-RapidAPI-Key': '0097d73be0msh8706a97c880b147p101570jsn5e1ad2325672'
        }
    });
$.get(
    "https://quotes15.p.rapidapi.com/quotes/random/",
    function(data) {
        console.log(data);
        document.querySelector('blockquote').innerHTML = data["content"];
        document.querySelector('.quotee').innerHTML = "— " + data["originator"]["name"];
    }
); */
let options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        'X-RapidAPI-Key': '0097d73be0msh8706a97c880b147p101570jsn5e1ad2325672'
    },
    body: JSON.stringify()
}
let fetchRes = fetch(
    "https://quotes15.p.rapidapi.com/quotes/random/", options);
    fetchRes.then(res =>
        res.json()).then(data => {
            theQuote.innerHTML = data["content"];
            theQuoteAuthor.innerHTML = "— " + data["originator"]["name"];
})
}
window.addEventListener("load", function(){
    GetQuote();
});
getQuoteBtn.onclick = function() {
console.log(getQuoteBtn);
getQuoteBtn.innerHTML = "Loading..";
getQuoteBtn.classList.add("loading");
let options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        'X-RapidAPI-Key': '0097d73be0msh8706a97c880b147p101570jsn5e1ad2325672'
    },
    body: JSON.stringify()
}
let fetchRes = fetch(
    "https://quotes15.p.rapidapi.com/quotes/random/", options);
    fetchRes.then(res =>
        res.json()).then(data => {
            // console.log(data)
            theQuote.innerHTML = data["content"];
            theQuoteAuthor.innerHTML = "— " + data["originator"]["name"];
            getQuoteBtn.classList.remove("loading");
            getQuoteBtn.innerHTML = "New Quote";
})
}
copyBtn.onclick = function() {
navigator.clipboard.writeText(theQuote.innerHTML + " " + theQuoteAuthor.innerHTML);
}
listenBtn.onclick = function() {
window.speechSynthesis.speak(new SpeechSynthesisUtterance(theQuote.innerHTML));
}