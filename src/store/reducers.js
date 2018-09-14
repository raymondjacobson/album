import { combineReducers } from 'redux';
import { UPDATE_CURSOR } from './actions';

function albums(state = {}, action) {
  switch (action.type) {
    case UPDATE_CURSOR:
      let newState = Object.assign({}, state);
      let positions =
        newState[action.albumIndex].songs[action.songIndex].positions;
      if (action.position in positions && positions[action.position] > 0) {
        positions[action.position] += action.amount;
      } else {
        positions[action.position] = action.amount;
      }
      return newState;
    default:
      return state;
  }
}

const libraryApp = combineReducers({
  albums
});

export default libraryApp;
