const LOCALHOST_URL = "http://localhost:3001"
const USER_URL = "http://localhost:3001/auth/user"
const BOOKS_API = "https://ibook5500.herokuapp.com/api/books";


const addBookToCart = (userId, book) =>
    fetch(`${LOCALHOST_URL}/${userId}/cart`, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const findUser = () =>
    fetch(`${USER_URL}`, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json())

const findAllBooksInCart = (username) => {
    fetch(`${LOCALHOST_URL}/${username}/cart`)
        .then(response => response.json())
}


export default {
    addBookToCart,
    findUser,
    findAllBooksInCart
}