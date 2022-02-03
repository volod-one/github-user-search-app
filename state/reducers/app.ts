const SET_ERROR = 'SET_ERROR'
const CLEAR_ERROR = 'CLEAR_ERROR'

const initialState = {
  isSearchError: false,
}

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        isSearchError: true,
      }
    case SET_ERROR:
      return {
        ...state,
        isSearchError: false,
      }
    default:
      return state
  }
}

export default appReducer

export const setSearchError = () => ({ type: SET_ERROR })
export const clearSearchError = () => ({ type: CLEAR_ERROR })
