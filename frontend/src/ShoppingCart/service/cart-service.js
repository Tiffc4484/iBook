const CART_URL = "http://localhost:3001/cart"
const USERS_URL = "http://localhost:3001/api/users"

const addBookToCart = (username, bookId) =>
    fetch(`${CART_URL}/${username}`, {
        method: 'POST',
        body: JSON.stringify(username),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const addFavoriteToUser = (username, mealId) =>
    fetch(`${FAVORITE_URL}/${username}`, {
        method: 'POST',
        body: JSON.stringify(mealId),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


const findUsersForFavorite = (mealId) => {
    fetch(`${USERS_URL}/favorites/${mealId}`)
        .then(response => response.json())
}


export default {
    addBookToCart,
    addFavoriteToUser,
    findUsersForFavorite
}