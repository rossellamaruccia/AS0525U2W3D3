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

      for (let i = 0; i < books.length; i++) {
        const card = document.createElement("div")

        card.innerHTML = `<img src="${books[i].img}" class="card-img-top" alt="book cover">
            <div class="card-body">
              <h5 class="card-title">${books[i].title}</h5>
              <p class="card-text">${books[i].price}€</p>
            </div>`

        card.classList.add("card")
        document.getElementById("bookRow").appendChild(card)
      }
      const cardsArray = document.getElementsByClassName("card")

      for (let i = 0; i < cardsArray.length; i++) {
        const button = document.createElement("button")
        button.classList.add("btn")
        button.classList.add("btn-secondary")
        button.innerText = "Scarta"
        cardsArray[i].appendChild(button)

        button.addEventListener(
          "click",
          (remove = () => {
            cardsArray[i].style.display = "none"
          })
        )
      }
    })

    .catch((err) => {
      console.log("ERRORE!", err)
    })
}

getBooks()
