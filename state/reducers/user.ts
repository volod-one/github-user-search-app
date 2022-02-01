const SET_USER = 'SET_USER'

const initialState = {}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default userReducer

export const setUser = (user: object) => ({ type: SET_USER, payload: user })
