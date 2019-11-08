import { CREATE_AUCTION, GET_ITEM,GET_ITEM_FAIL, GET_BIDDERS,GET_BIDDERS_FAIL } from "./type";
import Axios from "axios";

export const getItem = () => async dispatch =>{
    try {
        const res= await Axios.get('http://192.168.33.134:3004/item/fetchAll')
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

export const getBidders = () =>async dispatch => {
    try {
        const res = await Axios.get(`http://192.168.33.134:3004/supplier/fetchAll`)
        dispatch({
            type: GET_BIDDERS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_BIDDERS_FAIL
        })
        
    }
}


export const getActiveAuctions = () => async dispatch => {
    try {
        const res = await Axios.get(`http://192.168.33.134:3004/auction/open`)
    } catch (error) {
        
    }
}