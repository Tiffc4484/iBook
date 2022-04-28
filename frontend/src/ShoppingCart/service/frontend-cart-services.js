const USER_CART = "http://localhost:3001"
const USER_URL = "http://localhost:3001/auth/user"
const BOOKS_API = "https://ibook5500.herokuapp.com/api/books";


const addBookToCart = (username, book) => {
    console.log(JSON.stringify(book))

    return fetch(`${USER_CART}/${username}/cart`, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(response => response.json())
}

const updateBookQuantity = (username, book) =>
    fetch(`${USER_CART}/${username}/cart`, {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteBook = (name) =>
    fetch(`${USER_CART}/${name}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const findUser = () =>
    fetch(`${USER_URL}`, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json())

const findAllBooksInCart = (username) => {
    return fetch(`${USER_CART}/${username}/cart`)
        .then(response => response.json())
}


export default {
    addBookToCart,
    findUser,
    findAllBooksInCart,
    updateBookQuantity
}