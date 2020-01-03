export const FETCH_SOURCE_PENDING = 'FETCH_SOURCE_PENDING';
export const FETCH_SOURCE_SUCCESS = 'FETCH_SOURCE_SUCCESS';
export const FETCH_SOURCE_FOR_PAGINATION = 'FETCH_SOURCE_FOR_PAGINATION';
export const FETCH_TOPHEADLINES = 'FETCH_TOPHEADLINES';

export function fetchSourcePending() {
    return {
        type: FETCH_SOURCE_PENDING
    }
}

export function fetchSourceSuccess(sources) {
    return {
        type: FETCH_SOURCE_SUCCESS,
        payload: sources,
    }
}

export function fetchSourceForPagination(pageOfItems) {
    return {
        type: FETCH_SOURCE_FOR_PAGINATION,
        payload: pageOfItems
    }
}

export function fetchTopHeadLines(topHeadLines) {
    return {
        type: FETCH_TOPHEADLINES,
        payload: topHeadLines
    }
}

