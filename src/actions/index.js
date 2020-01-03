import * as Constants from "../config/Constants";
import API from "../config/AxiosBaseUrl";
import {fetchSourcePending, fetchSourceSuccess, fetchSourceForPagination, fetchTopHeadLines} from './actions';

export function fetchSource(countryCode) {
    console.log("hjhj", countryCode);
    return dispatch => {
        dispatch(fetchSourcePending());
        return API.get(`sources?country=${countryCode}&apiKey=${Constants.ApiKey}`)
        .then(res => {    
            console.log('dispatch', res.data.sources)        
        dispatch(fetchSourceSuccess(res.data.sources));
        return res.data.sources
        });        }
}

export function fetchSourcePagination(pageOfItems) {
    console.log("fetchSourcePagination", pageOfItems);
    return dispatch => dispatch(fetchSourceForPagination(pageOfItems));
}

export function fetchTopSource(id) {
    console.log("hjhj", id);
    return dispatch => {
        dispatch(fetchSourcePending());
        return API.get(`top-headlines?sources=${id}&apiKey=${Constants.ApiKey}`)
        .then(res => {    
            console.log('dispatch',  res.data.articles)        
        dispatch(fetchTopHeadLines( res.data.articles));
        return  res.data.articles
        });        }
}