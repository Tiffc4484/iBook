const BOOKS_API = "https://ibook5500.herokuapp.com/api/books";

export const findBooks = (keyword) =>
    fetch(`${BOOKS_API}/search/${keyword}`)
        .then(response => response.json());

export const findTopBooks = () =>
    fetch(`${BOOKS_API}/top`)
        .then(response => response.json());

export const findBookById = (id) =>
    fetch(`${BOOKS_API}/search/id/${id}`)
        .then(response => response.json());

export const findRecentBooks = () =>
    fetch(`${BOOKS_API}/recent/10`)
        .then(response => response.json());
