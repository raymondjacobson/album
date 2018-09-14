/*
 * action types
 */

export const UPDATE_CURSOR = 'UPDATE_CURSOR';

/*
 * action creators
 */

export function updateCursor(albumIndex, songIndex, position) {
  return { type: UPDATE_CURSOR, albumIndex, songIndex, position };
}
