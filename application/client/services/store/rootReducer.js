import { combineReducers } from 'redux';
import friendReducer from '../friend/friendDuck';
import billReducer from '../bill/billDuck';

export default combineReducers({
  friend: friendReducer,
  bill: billReducer,
});
