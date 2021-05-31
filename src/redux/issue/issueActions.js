import { ADD_HIGHLIGHTEDISSUES } from './issueTypes';

// export const showHighlightedIssues = (issues) => {
//     return {
//         type: SHOW_HIGHLIGHTEDISSUES,
//         payload: issues,
//     }
// }

export const addHighlightedIssues = (issue) => {
    return {
        type: ADD_HIGHLIGHTEDISSUES,
        payload: issue,
    }
}