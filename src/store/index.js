import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchList } from './fetchReducer';

const rootReducer = combineReducers({
    list: fetchList,
})

export const store = createStore(rootReducer, composeWithDevTools())