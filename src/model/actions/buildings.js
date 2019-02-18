import {
    ADD_BUILDING_REQUEST,
    ADD_BUILDING_SUCCESS,
    // ADD_BUILDING_FAILURE,

    DELETE_BUILDING_REQUEST,
    DELETE_BUILDING_SUCCESS,
    // DELETE_BUILDING_FAILURE,
} from '../action-types/building';

const addBuildingRequest = (payload) => ({
    type: ADD_BUILDING_REQUEST,
    payload: payload,
});
const addBuildingSuccess = (payload) => ({
    type: ADD_BUILDING_SUCCESS,
    payload: payload,
});
// const addBuildingFailure = (payload) => ({
//     type: ADD_BUILDING_FAILURE,
//     payload: payload,
// });


// Model Building
// Building: {
//   id(number)
//   class(string)
//   street(string)
//   houseNumber(string)
//   floors(number)
//   blocksID(number[]) <-- Blocks
// }

/**
 *
 * @param {{ id: number, class: string, street: string, houseNumber: string, floors: number, blocksID: [number] }} data
 * @returns {Promise<any>}
 */
export const addBuilding = (data) => (dispatch) => {
    dispatch(addBuildingRequest());
    dispatch(addBuildingSuccess());
};

const deleteBuildingRequest = (payload) => ({
    type: DELETE_BUILDING_REQUEST,
    payload: payload,
});
const deleteBuildingSuccess = (payload) => ({
    type: DELETE_BUILDING_SUCCESS,
    payload: payload,
});
// const deleteBuildingFailure = (payload) => ({
//     type: DELETE_BUILDING_FAILURE,
//     payload: payload,
// });

export const deleteBuilding = (data) => (dispatch) => {
    dispatch(deleteBuildingRequest());
    dispatch(deleteBuildingSuccess());
};