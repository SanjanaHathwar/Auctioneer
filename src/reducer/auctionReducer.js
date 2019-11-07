import { GET_ITEM, GET_ITEM_FAIL } from "../action/type"

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
        default :
            return{
                ...state
            }
    }
}