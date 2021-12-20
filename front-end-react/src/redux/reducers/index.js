import { combineReducers } from 'redux';

import reducerLogin from "../reducers/reducerLogin";
import reducerUpdateSidebar from './reducerUpdateSidebar';

const allReducers = combineReducers({
  reducerLogin,
  reducerUpdateSidebar,
  // add more reducers here
});

export default allReducers;