import {FETCH_SOURCE_PENDING, FETCH_SOURCE_SUCCESS, FETCH_SOURCE_FOR_PAGINATION, FETCH_TOPHEADLINES} from '../actions/actions';


const initialState = {
    loading: false,
    sources: [],
    error: null,
    pageOfItems: [],
    topSources: []
}

export default function sourceReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SOURCE_PENDING: 
            return {
                ...state,
                loading: true
            }
        case FETCH_SOURCE_SUCCESS:
            return {
                ...state,
                loading: false,
                sources: action.payload
            }
        case FETCH_SOURCE_FOR_PAGINATION:
            return {
                ...state,
                pageOfItems: action.payload
            }

        case FETCH_TOPHEADLINES:
            return {
                ...state,
                loading: false,
                topSources: action.payload
            }
        default: 
            return state;
    }
}

export const getSource = state => state.sources;
export const getSourcePending = state => state.loading;
export const getSourceForPagination = state => state.pageOfItems;
export const getTopSource = state => state.topSources