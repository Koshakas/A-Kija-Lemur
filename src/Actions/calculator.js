import { ADD, DIFF, MULT, DIV } from "../Constants/actions";

export const actionAdd = payload => {
    // {d1: 12, d2: 2}
    return {
        type: ADD,
        payload: payload
    };
};

export const actionDiff = payload => {
    return {
        type: DIFF,
        payload: payload
    };
};

export const actionMult = payload => {
    return {
        type: MULT,
        payload: payload
    };
};

export const actionDiv = payload => {
    return {
        type: DIV,
        payload: payload
    };
};
