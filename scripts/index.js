const quote = document.querySelector(".quote-holder .quote");
const author = document.querySelector(".quote-holder .author");
const refresh = document.querySelector(".quote-holder .controls .fa-redo");
const copytooltip = document.querySelector(".quote-holder .controls .copy .tooltip");
const copy = document.querySelector(".quote-holder .controls .copy");

function refreshQuote() {
    refresh.style.animation = "rotate 1s";
    fetchQuote().then(() => {
        refresh.style.animation = "";
    });
}

async function fetchQuote() {
    let response = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
    setQuote(await response.json());
}

function setQuote(data) {
    quote.innerText = data.quotes[0].text;
    author.innerText = data.quotes[0].author;
}


function copyQuote() {
    navigator.clipboard.writeText(quote.innerText);
    copytooltip.innerText = "Copied!";
}

function mouseLeft() {
    copytooltip.innerText = "Copy";
}


fetchQuote();



