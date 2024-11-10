import axios from "axios";
import { FETCH_CAKES, FETCH_CAKES_ERROR, FETCH_CAKES_PENDING, SET_CAKES } from "./constant";
import {put, takeLatest} from 'redux-saga/effects'


function* fetchCakes(params){
    try {
        yield put({type:FETCH_CAKES_PENDING, payload:true})
        const response = yield axios.get('http://localhost:8000/api/cakes/');
        if(response?.data?.data?.length){
            yield put ({type:SET_CAKES, payload:response.data.data})
        }
        yield put ({type:FETCH_CAKES_PENDING, payload:false})
    } catch (error) {
        yield put ({type:FETCH_CAKES_ERROR, payload:error?.message})
        yield put ({type:FETCH_CAKES_PENDING, payload:false})
    }
}

export default function* cakeSaga() {
    yield takeLatest(FETCH_CAKES, fetchCakes);
}