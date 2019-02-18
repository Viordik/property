// import { combineReducers } from 'redux'

import {
    ADD_BUILDING_SUCCESS,
    DELETE_BUILDING_SUCCESS,
} from '../../action-types/building';

import {
    ADD_BLOCK_SUCCESS
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

const buildingsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case ADD_BUILDING_SUCCESS: {
            const { id } = payload

            return {
                ...state,
                [id]: payload
            }
        }

        case DELETE_BUILDING_SUCCESS: {
            const { id } = payload;

            return Array.prototype.filter(state, (building, key) => key !== id);
        }

        case ADD_BLOCK_SUCCESS: {
            const { id: blockID, buildingID } = payload;
            const building = state[buildingID];

            return {
                ...state,

                [building.id]: {
                    ...building,

                    blocks: [
                        ...building.blocks,
                        blockID
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