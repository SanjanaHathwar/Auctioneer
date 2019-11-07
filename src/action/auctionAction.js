import { CREATE_AUCTION, GET_ITEM,GET_ITEM_FAIL } from "./type";
import Axios from "axios";

export const getItem = () => async dispatch =>{
    try {
        const res= await Axios.get('/item/fetchAll')
        dispatch({
            type: GET_ITEM,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_ITEM_FAIL,
            
        })
    }
}