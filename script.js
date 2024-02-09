// dati acquisiti dalla fetch
const data = {};

// endpopint
const bookEndpoint = "https://striveschool-api.herokuapp.com/books";

//Nodi utili
//Input di ricerca:
const searchInput = document.getElementById("search-field");

//Tasto di ricerca:
const searchBtn = document.getElementById("search-btn");

//Box dei risultati:
const resultsBox = document.getElementById("") //! da decidere


//Funzione di ricerca
function getResults() {
    fetch(`https://striveschool-api.herokuapp.com/books`)
    .then(res => res.json())
    .then(json => filterResult(json))
    .catch(err => console.log(err));
}

//Funzione di filtraggio

function filterResult (jsonData) {
    let searchValue = searchInput.value;
    const result = jsonData.filter((book) => book.title.includes(searchValue));
    console.log(result);
    createCard(result);
}

//Funzione di creazione nodi

function createCard (result) {
    let card = document.createElement("div");
    card.classList = ["card", "mb-5", "border-0"];
    document.resultsBox.appendChild(card);
}

//Funzione per il carrello


