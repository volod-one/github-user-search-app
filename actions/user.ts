import axios from 'axios'
import { setSearchError } from '../state/reducers/app'
import { setUser } from '../state/reducers/user'

export const fetchUser = (user: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`)
      dispatch(setUser(response.data))
    } catch (error) {
      dispatch(setSearchError())
    }
  }
}
