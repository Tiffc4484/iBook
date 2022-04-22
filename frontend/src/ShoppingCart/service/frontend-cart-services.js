const LOCAL_HOST = "http://localhost:3001"
const USER_URL = "http://localhost:3001/auth/user"
const BOOKS_API = "https://ibook5500.herokuapp.com/api/books";


const addBookToCart = (username, book) => {
    console.log("frontend-service" + JSON.stringify(book))

    return fetch(`${LOCAL_HOST}/${username}/cart`, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json',
        }
    }).then(response => response.json())
}

const findUser = () =>
    fetch(`${USER_URL}`, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json())

const findAllBooksInCart = (username) => {
    fetch(`${LOCAL_HOST}/${username}/cart`)
        .then(response => response.json())
}


export default {
    addBookToCart,
    findUser,
    findAllBooksInCart
}