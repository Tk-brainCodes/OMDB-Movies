import * as norminateType from './Norminate-types';

//add norminee
export const addNorminee = (itemID) => {
    return {
        type: norminateType.ADD_NORMINEE,
        payload: {
            id: itemID
        }
    }

}

//remove norminee
export const removeNorminee = (itemID) => {
    return {
        type: norminateType.REMOVE_NORMINEE,
        payload: {
            id: itemID
        }
    }
}