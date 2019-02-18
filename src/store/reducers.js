import { combineReducers } from 'redux'

// Reducers
import buildingsReducer from '../model/reducers/buildings';
// const blockReducer = (state = 1, action) => state;
// const offerReducer = (state = 1, action) => state;
// const priceReducer = (state = 1, action) => state;

const rootReducer = combineReducers({
    buildings: buildingsReducer || [],
    offers: [],
    blocks: [],
    prices: [],
})

export default rootReducer;

/**
 * Model
 * {
 *      Building: {
 *          id(number)
 *          class(string),
 *          street(string),
 *          house_number(string),
 *          floors(number),
 *
 *          Blocks(array): [block_id(number)]
 *      },
 *
 *      Block: {
 *          id(number)
 *          area(number),
 *          floor(number),
 *
 *          building_id(number): Building_ID(number)
 *          offers(array): [Offers_ID(number)]
 *      },
 *
 *      Offer: {
 *          id(number),
 *          offer_type(string -> [rent, sale]),
 *          price_id(number): Price_ID
 *      },
 *
 *      Price: {
 *          id(number),
 *          value(number),
 *          currency(number -> [1 -> рубли, 2 -> доллар, 3 -> евро])
 *      }
 * }
 */

