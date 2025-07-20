let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let loadingEL = document.getElementById("spinner");
let option = {
        method: "GET"
    }
function randomJokeGenrator() {
    jokeTextEl.classList.toggle("d-none");
    loadingEL.classList.toggle("d-none");
    


    fetch("https://apis.ccbp.in/jokes/random", option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            jokeTextEl.classList.toggle("d-none");
            loadingEL.classList.toggle("d-none");
            let joke = jsonData.value;
            jokeTextEl.textContent=joke;
        })
}


jokeBtnEl.addEventListener("click", randomJokeGenrator);