import { combineReducers } from 'redux';
import { UPDATE_CURSOR } from './actions';

function albums(state = {}, action) {
  switch (action.type) {
    case UPDATE_CURSOR:
      let newState = Object.assign({}, state);
      newState.albums[action.albumIndex][action.songIndex].positions.push(
        action.position
      );
      return newState;
    default:
      return state;
  }
}

const libraryApp = combineReducers({
  albums
});

export default libraryApp;
