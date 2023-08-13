const quoteText = document.querySelector("qu");
let authorName = document.querySelector("au");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound")
soundBtn = document.querySelector(".copy")
soundBtn = document.querySelector(".twitter")

//rendom Qoute fun
function randomQuote(params) {


    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote...!"

    // fetching random quotes / data from the API and parsing it into JS Object

    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        // console.log(quoteText);
        authorName.innerText = result.author;

        quoteBtn.innerText = "New Quote"
        quoteBtn.classList.remove("loading")
    })
}

soundBtn.addEventListener("click",()=>{
    // the SpeechSynthesisUtterance is a web speech api that represent a speech request.
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance)  // speak method of speechSynthesis speaks the utterance
})


quoteBtn.addEventListener("click", randomQuote)