import { combineReducers } from 'redux'

import {
    ADD_BLOCK_SUCCESS,
    DELETE_BLOCK_SUCCESS,
} from '../../action-types/block';

// Model Building
// Building: {
//   id(number)
//   class(string)
//   street(string)
//   houseNumber(string)
//   floors(number)
//   blocksID(number[]) <-- Blocks
// }



const initialState = {};

const blocksReducer = (state = initialState, payload) => {
    return state;
}

const buildingsReducer = (state = initialState, payload) => {
    switch(payload.type) {
        case ADD_BLOCK_SUCCESS: {
            const { item } = payload

            return {
                ...state,
                [item.id]: item
            }
        }

        case DELETE_BUILDING_SUCCESS: {
            const { id } = payload;

            return Array.prototype.filter(state, (building, key) => key !== id);
        }

        case ADD_BLOCK_SUCCESS: {
            const { item } = payload;
            const building = Array.prototype.find(state, (building, key) => key === item.id);

            return {
                ...state,

                [building.id]: {
                    ...building,
                    blocks: [
                        ...building.blocks,
                        item.id
                    ]
                }
            };
        }

        default: {
            return state;
        }
    }
};

export default buildingsReducer;