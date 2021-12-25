const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/90pBsDJNKS9pvPvTgwYE/books'
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: {...payload}
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const sendBook = (payload) => async (dispatch) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.status === 201) {
      dispatch(addBook(payload))
    }
  });
};

export const deleteBook = (payload) => async (dispatch) => {
  await fetch(`${url}/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(),
  });
  dispatch(removeBook(payload));
};

export const getBookApi = () => async (dispatch) => {
  const pull = await fetch(url);
  const res = await pull.json();
  dispatch(getBook(res))
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOK:
      return Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
        };
      });
    default:
      return state;
  }
};

export default reducer;
