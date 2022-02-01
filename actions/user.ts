import axios from 'axios'
import { setUser } from '../state/reducers/user'

export const fetchUser = (user: string) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`)
      dispatch(setUser(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}
