import { GET_ITEM, GET_ITEM_FAIL, GET_BIDDERS,GET_BIDDERS_FAIL } from "../action/type"

const initialState = {
    items: [],
    itemId: null,
    date: null,
    time : null,
    startingPrice: null,
    minDecrement: null,
    from : null,
    to: null,
    suppliers: [],
    invitedSuppliers: [],
    
}

export default function( state = initialState,action ) {
    const { type ,payload } = action
    switch(type) {
        case GET_ITEM :
            return {
                ...state,
                items: payload
            }
        case GET_ITEM_FAIL :
            return{
                ...state,
                items : []
            }
        case GET_BIDDERS :
            return {
                ...state,
                suppliers: payload
            }
        case GET_BIDDERS_FAIL : 
            return {
                ...state,
                suppliers: []
            }
        default :
            return{
                ...state
            }
    }
}