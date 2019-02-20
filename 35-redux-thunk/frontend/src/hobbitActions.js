/* ------------- ACTION CREATOR --------------- */

export const selectHobbit = (hobObj) => ({ type: 'SELECT_HOBBIT', payload: hobObj })
export const editHobbit = (hob) => ({ type: 'EDIT_HOBBIT', payload: hob })
export const loadHobbits = (hobs) => ({ type: 'LOAD_HOBBITS', payload: hobs })
