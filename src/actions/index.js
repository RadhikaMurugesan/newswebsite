import * as Constants from "../config/Constants";
import API from "../config/AxiosBaseUrl";
import {fetchSourcePending, fetchSourceSuccess, fetchSourceForPagination} from './actions';

export function fetchSource(countryCode) {
    console.log("hjhj");
    return dispatch => {
        dispatch(fetchSourcePending());
        return API.get(`sources?country=${countryCode}&apiKey=${Constants.ApiKey}`)
        .then(res => {            
        dispatch(fetchSourceSuccess(res.data.sources));
        return res.data.sources
        });        }
}

export function fetchSourcePagination(countryCode) {
    console.log("fetchSourcePagination");
    return dispatch => dispatch(fetchSourceForPagination(countryCode));
}