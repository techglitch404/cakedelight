import {ADD_CAKES, DECREASE, FETCH_CAKES, GET_CAKES_FROM_LOCALSTORAGE, INCREASE, REMOVE_CAKES} from '../products/constant'

export function fetchCakes(){
    return {
        type:FETCH_CAKES,
    }
}

export function addCake(cake){
    return {
        type: ADD_CAKES,
        payload: cake
    }
}

export function removeCake(cake){
    return {
        type: REMOVE_CAKES,
        payload: cake
    }
}

export const getCakeFromLocalStorage = () => {
    return {
        type: GET_CAKES_FROM_LOCALSTORAGE
    }
}

export function increase(value) {
    return {
        type: INCREASE,
        payload: value
    }
}

export function decrease(value) {
    return {
        type: DECREASE,
        payload: value
    }
}