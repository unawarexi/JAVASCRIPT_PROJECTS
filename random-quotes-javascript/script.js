const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".name");
quoteBtn =   document.querySelector("button");
speechBtn =   document.querySelector(".speech");
copyBtn =   document.querySelector(".copy");
twitterBtn =   document.querySelector(".twitter");
synth = speechSynthesis;


function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "loading quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    })
}


speechBtn.addEventListener("click", ()=> {
    if(!quoteBtn.classList.contains("loading")){
        let Utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);

        setInterval(() => {
            !speech.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active")
        }, 10);
    }
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener("click", () => {
    window.open(`https://twitter.com/intent/tweet?text=${quoteText.innerText}&hashtags=quotes`);
});


quoteBtn.addEventListener("click", randomQuote);
