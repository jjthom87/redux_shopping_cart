import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import messages from './messages';

const Reducers = combineReducers({
    messages,
    form: formReducer,
    routing: routerReducer
});

export default Reducers;