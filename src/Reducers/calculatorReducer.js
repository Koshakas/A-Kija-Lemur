import { ADD, DIFF, MULT, DIV } from "../Constants/actions";

const calculatorReducer = (state, action) => {
    let calculator;
    action.payload.d1 = parseInt(action.payload.d1);
    action.payload.d2 = parseInt(action.payload.d2);
    switch (action.type) {
        case ADD:
            calculator = action.payload.d1 + action.payload.d2;
            break;
        case DIFF:
            calculator = action.payload.d1 - action.payload.d2;
            break;
        case MULT:
            calculator = action.payload.d1 * action.payload.d2;
            break;
        case DIV:
            if (action.payload.d2 === 0) {
                calculator = "Error";
            } else {
                calculator = action.payload.d1 / action.payload.d2;
            }
            break;
        default:
            calculator = 0;
    }
    return calculator;
};

export default calculatorReducer;
