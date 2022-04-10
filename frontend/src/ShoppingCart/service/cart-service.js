const LOCALHOST_URL = "http://localhost:3001"
const USERS_URL = "http://localhost:3001/auth/user"
const BOOKS_API = "https://ibook5500.herokuapp.com/api/books";


const addBookToCart = (username, bookId) =>
    fetch(`${LOCALHOST_URL}/${username}/cart`, {
        method: 'POST',
        body: JSON.stringify(bookId),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())



const findAllBooksInCart = (username) => {
    fetch(`${LOCALHOST_URL}/${username}/cart`)
        .then(response => response.json())
}


export default {
    addBookToCart,
    findAllBooksInCart
}