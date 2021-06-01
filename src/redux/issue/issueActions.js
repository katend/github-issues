import { ADD_HIGHLIGHTEDISSUES } from './issueTypes';

export const addHighlightedIssues = (issue) => {
    return {
        type: ADD_HIGHLIGHTEDISSUES,
        payload: issue,
    }
}