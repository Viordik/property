import {
    ADD_BLOCK_REQUEST,
    ADD_BLOCK_SUCCESS,
    // ADD_BLOCK_FAILURE,

    DELETE_BLOCK_REQUEST,
    DELETE_BLOCK_SUCCESS,
    // DELETE_BLOCK_FAILURE,
} from '../action-types/block';

const addBlockRequest = (payload) => ({
    type: ADD_BLOCK_REQUEST,
    payload: payload,
});
const addBlockSuccess = (payload) => ({
    type: ADD_BLOCK_SUCCESS,
    payload: payload,
});
// const addBlockFailure = (payload) => ({
//     type: ADD_BLOCK_FAILURE,
//     payload: payload,
// });

export const addBlock = (data) => (dispatch) => {
    dispatch(addBlockRequest());
    dispatch(addBlockSuccess());
}

const deteleBlockRequest = (payload) => ({
    type: DELETE_BLOCK_REQUEST,
    payload: payload,
})
const deteleBlockSuccess = (payload) => ({
    type: DELETE_BLOCK_SUCCESS,
    payload: payload,
})

export const deleteBlock = (data) => disptach => {
    dispatch(deteleBlockRequest());
    dispatch(deteleBlockSuccess());
}