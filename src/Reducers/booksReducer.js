import { GET_ALL_FROM_SERVER, SELECTOR_CHANGED } from "../Constants/bookActions";

const booksReducer = (state, action) => {
    let books = { ...state };
    let afterSelectors = [...state.masterBooks];

    // Main
    switch (action.type) {
        case GET_ALL_FROM_SERVER:
            books = {
                showBooks: [...action.payload],
                masterBooks: [...action.payload]
            };
            break;
        default:
    }

    // Filters
    switch (action.type) {
        case SELECTOR_CHANGED:
            break;
        default:
    }

    // Sort
    switch (action.type) {
        case SELECTOR_CHANGED:
            break;
        default:
    }

    // Pagination
    switch (action.type) {
        case SELECTOR_CHANGED:
            break;
        default:
    }

    return books;
};

export default booksReducer;
