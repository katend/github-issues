import {createStore} from 'redux';
import issueReducer from './issue/issueReducer';

const store = createStore(issueReducer)

export default store;
