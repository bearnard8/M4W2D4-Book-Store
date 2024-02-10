//Nodi utili
//Input di ricerca:
const searchInput = document.getElementById("search-field");

//Tasto di ricerca:
const searchBtn = document.getElementById("search-btn");

//Box dei risultati:
const resultsBox = document.getElementById("card-container");


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
    createCard(result);
}

//Funzione di creazione nodi

/*
    <div class="card mb-5 border-0">
        <div class="card-img">
            <img src="" alt="" class="img-fluid rounded">
        </div>
        <div class="card-text">
            <div class="price d-flex align-items-center mt-1">
                <span class="star-rating d-flex align-items-center">
                    €
                    <span class="mx-1 star-rating-num">4.75</span>
                </span>
            </div>
            <p class="title-info mb-0"></p>
        </div>
    </div>
*/

function createCard (result) {
    result.forEach(book => {
        let card = document.createElement("div");
        card.classList.add("card", "mb-5", "border-0");
        let imgBox = document.createElement("div");
        imgBox.classList.add("card-img");
        let bookImg = document.createElement("img");
        bookImg.src = book.img;
        bookImg.classList.add("img-fluid");
        let textBox = document.createElement("div");
        textBox.classList.add("card-text");
        let priceBox = document.createElement("div");
        priceBox.classList.add("d-flex", "align-items-center", "mt-1");
        let priceBoxInner = document.createElement("span");
        priceBoxInner.classList.add("d-flex", "align-items-center");
        priceBoxInner.innerText = "€";
        let dynPrice = document.createElement("span");
        dynPrice.classList.add("mx-1");
        dynPrice.innerText = book.price;
        let title = document.createElement("p");
        title.classList.add("mb-0");
        title.innerText = book.title;

        resultsBox.appendChild(card);
            card.appendChild(imgBox);
                imgBox.appendChild(bookImg);
            card.appendChild(textBox);
                textBox.appendChild(priceBox);
                    priceBox.appendChild(priceBoxInner);
                        priceBoxInner.appendChild(dynPrice);
                    textBox.appendChild(title);
    });
}

//Funzione per il carrello


