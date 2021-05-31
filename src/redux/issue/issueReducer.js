import { ADD_HIGHLIGHTEDISSUES } from './issueTypes';

const initialState = {
    highlightedIssues: [],
}

const issueReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_HIGHLIGHTEDISSUES:
            const newHighlightedIssues = [...state.highlightedIssues, action.payload]
            const uniqueRecentIssues = Array.from(new Set(newHighlightedIssues));
            return {
                ...state,
                highlightedIssues: uniqueRecentIssues
            }
        default: return state
    }
}

export default issueReducer;