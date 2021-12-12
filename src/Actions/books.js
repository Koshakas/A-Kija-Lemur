import { GET_ALL_FROM_SERVER, SELECTOR_CHANGED } from "../Constants/bookActions";

export const actionGetAllFromServers = books => {
    return {
        type: GET_ALL_FROM_SERVER,
        payload: books
    };
};

export const actionSelectorsChanged = selectors => {
    return {
        type: SELECTOR_CHANGED,
        payload: selectors
    };
};
