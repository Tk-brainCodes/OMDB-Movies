import { combineReducers } from 'redux';

import  norminateReducer  from '../Norminate/Norminate-reducer';

const rootReducer = combineReducers({
    shop: norminateReducer,
});

export default rootReducer;