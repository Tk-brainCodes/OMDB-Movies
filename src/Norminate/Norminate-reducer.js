import * as norminateType from './Norminate-types';

const INITIAL_STATE = {
    products: [],//id title year img
    cart: [], //id title year img
}

const norminateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case norminateType.ADD_NORMINEE:
            return {}
        case norminateType.REMOVE_NORMINEE:
            return {}
        default:
            return state;
    }
}

export default norminateReducer;


