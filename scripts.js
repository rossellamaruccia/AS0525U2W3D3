//  nella “card image” inserisci la copertina del libro,
//  nel “card body” il suo titolo e il suo prezzo.
//  ● Sempre nel “card body” inserisci un pulsante “Scarta”.

const bookUrl = "https://striveschool-api.herokuapp.com/books"

const getBooks = function () {
  fetch(bookUrl)
    .then((response) => {
      if (response.ok === true) {
        return response.json()
      } else {
        throw new Error()
      }
    })
    .then((books) => {
      console.log("books data", books)
      books.forEach((book) => {
        for (let i = 0; i < books.length; i++) {
          const card = document.createElement("div")

          card.innerHTML = `<img src="${books[i].img}" class="card-img-top" alt="book cover">
            <div class="card-body">
              <h5 class="card-title">${books[i].title}</h5>
              <p class="card-text">${books[i].price}</p>
              <a href="#" class="btn btn-secondary">Scarta</a>
              <a href="#" class="btn btn-secondary">Compra</a>
            </div>`

          card.classList.add("card")
          document.getElementById("bookRow").appendChild(card)
        }
      })
    })
    .catch((err) => {
      console.log("ERRORE!", err)
    })
}

getBooks()
